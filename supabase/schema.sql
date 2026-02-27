-- HSO CCTV Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products Table
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  model_number TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  camera_type TEXT NOT NULL,
  resolution TEXT NOT NULL,
  audio TEXT,
  connectivity TEXT NOT NULL,
  description TEXT,
  specifications JSONB,
  special_features TEXT[],
  status TEXT DEFAULT 'active',
  image TEXT,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders Table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  items JSONB NOT NULL,
  total_items INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics Table
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_model_number ON products(model_number);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_analytics_product_id ON analytics(product_id);
CREATE INDEX idx_analytics_event_type ON analytics(event_type);
CREATE INDEX idx_analytics_created_at ON analytics(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to auto-update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Public read access for products (for website visitors)
CREATE POLICY "Public products are viewable by everyone"
  ON products FOR SELECT
  USING (status = 'active');

-- Admin full access to products (you'll set this up with auth)
CREATE POLICY "Admins can do everything with products"
  ON products FOR ALL
  USING (auth.role() = 'authenticated');

-- Public can insert orders (cart checkout)
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

-- Admin can view and update orders
CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update orders"
  ON orders FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Public can insert analytics
CREATE POLICY "Anyone can create analytics"
  ON analytics FOR INSERT
  WITH CHECK (true);

-- Admin can view analytics
CREATE POLICY "Admins can view analytics"
  ON analytics FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create a view for dashboard statistics
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT
  (SELECT COUNT(*) FROM products WHERE status = 'active') as total_products,
  (SELECT COUNT(*) FROM orders) as total_orders,
  (SELECT COUNT(*) FROM orders WHERE status = 'pending') as pending_orders,
  (SELECT COUNT(*) FROM orders WHERE created_at > NOW() - INTERVAL '7 days') as orders_this_week,
  (SELECT COUNT(*) FROM analytics WHERE event_type = 'view' AND created_at > NOW() - INTERVAL '7 days') as views_this_week,
  (SELECT COUNT(*) FROM analytics WHERE event_type = 'add_to_cart' AND created_at > NOW() - INTERVAL '7 days') as cart_adds_this_week;

-- Create a view for popular products
CREATE OR REPLACE VIEW popular_products AS
SELECT
  p.id,
  p.name,
  p.model_number,
  p.category,
  p.image,
  COUNT(CASE WHEN a.event_type = 'view' THEN 1 END) as view_count,
  COUNT(CASE WHEN a.event_type = 'add_to_cart' THEN 1 END) as cart_count,
  COUNT(CASE WHEN a.event_type = 'inquiry' THEN 1 END) as inquiry_count
FROM products p
LEFT JOIN analytics a ON p.id = a.product_id
WHERE p.status = 'active'
GROUP BY p.id, p.name, p.model_number, p.category, p.image
ORDER BY view_count DESC, cart_count DESC
LIMIT 10;
