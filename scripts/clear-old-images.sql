-- Clear old image references from migrated products
-- Run this in Supabase SQL Editor

UPDATE products 
SET image = NULL 
WHERE image IS NOT NULL 
AND image NOT LIKE '%-%.%';

-- This will clear images that don't have the Supabase Storage timestamp pattern
-- New uploaded images (like "product-1771144698862.png") will be kept
-- Old references (like "IP-1.png") will be cleared
