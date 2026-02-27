/**
 * Export Database Script
 * Exports all data from current Supabase project to JSON files
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Error: Missing Supabase credentials');
  console.error('Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function exportDatabase() {
  console.log('🚀 Starting database export...\n');

  // Create migration-data directory
  const migrationDir = path.join(process.cwd(), 'migration-data');
  if (!fs.existsSync(migrationDir)) {
    fs.mkdirSync(migrationDir);
    console.log('📁 Created migration-data directory\n');
  }

  try {
    // Export products
    console.log('📦 Exporting products...');
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: true });

    if (productsError) {
      throw new Error(`Failed to export products: ${productsError.message}`);
    }

    fs.writeFileSync(
      path.join(migrationDir, 'products.json'),
      JSON.stringify(products, null, 2)
    );
    console.log(`✅ Exported ${products?.length || 0} products\n`);

    // Export dashboard stats
    console.log('📊 Exporting dashboard stats...');
    const { data: stats, error: statsError } = await supabase
      .from('dashboard_stats')
      .select('*');

    if (statsError) {
      console.warn(`⚠️  Warning: Could not export dashboard_stats: ${statsError.message}`);
    } else {
      fs.writeFileSync(
        path.join(migrationDir, 'dashboard_stats.json'),
        JSON.stringify(stats, null, 2)
      );
      console.log(`✅ Exported dashboard stats\n`);
    }

    // Generate SQL insert statements
    console.log('📝 Generating SQL import script...');
    let sqlScript = '-- HSO CCTV Database Import Script\n';
    sqlScript += '-- Generated: ' + new Date().toISOString() + '\n\n';

    // Products insert statements
    sqlScript += '-- Insert Products\n';
    products?.forEach((product) => {
      const values = [
        `'${product.id}'`,
        `'${product.name?.replace(/'/g, "''")}'`,
        product.model_number ? `'${product.model_number}'` : 'NULL',
        product.category ? `'${product.category}'` : 'NULL',
        product.camera_type ? `'${product.camera_type}'` : 'NULL',
        product.resolution ? `'${product.resolution}'` : 'NULL',
        product.audio ? `'${product.audio}'` : 'NULL',
        product.connectivity ? `'${product.connectivity}'` : 'NULL',
        product.description ? `'${product.description?.replace(/'/g, "''")}'` : 'NULL',
        product.status ? `'${product.status}'` : "'active'",
        product.image ? `'${product.image}'` : 'NULL',
        product.stock_quantity || 0,
        product.lens ? `'${product.lens}'` : 'NULL',
        product.special_features ? `ARRAY[${product.special_features.map((f: string) => `'${f}'`).join(',')}]` : 'NULL'
      ];

      sqlScript += `INSERT INTO products (id, name, model_number, category, camera_type, resolution, audio, connectivity, description, status, image, stock_quantity, lens, special_features)\n`;
      sqlScript += `VALUES (${values.join(', ')});\n\n`;
    });

    // Dashboard stats insert
    if (stats && stats.length > 0) {
      sqlScript += '\n-- Insert Dashboard Stats\n';
      const stat = stats[0];
      sqlScript += `INSERT INTO dashboard_stats (total_products, total_orders, pending_orders, orders_this_week, views_this_week, cart_adds_this_week)\n`;
      sqlScript += `VALUES (${stat.total_products || 0}, ${stat.total_orders || 0}, ${stat.pending_orders || 0}, ${stat.orders_this_week || 0}, ${stat.views_this_week || 0}, ${stat.cart_adds_this_week || 0});\n`;
    }

    fs.writeFileSync(
      path.join(migrationDir, 'import.sql'),
      sqlScript
    );
    console.log('✅ Generated SQL import script\n');

    // Create summary
    const summary = {
      exportDate: new Date().toISOString(),
      productsCount: products?.length || 0,
      dashboardStatsCount: stats?.length || 0,
      sourceProject: SUPABASE_URL,
      files: [
        'products.json',
        'dashboard_stats.json',
        'import.sql'
      ]
    };

    fs.writeFileSync(
      path.join(migrationDir, 'export-summary.json'),
      JSON.stringify(summary, null, 2)
    );

    console.log('✅ Export completed successfully!\n');
    console.log('📁 Files saved to: migration-data/');
    console.log('   - products.json');
    console.log('   - dashboard_stats.json');
    console.log('   - import.sql');
    console.log('   - export-summary.json\n');
    console.log('📊 Summary:');
    console.log(`   - Products: ${summary.productsCount}`);
    console.log(`   - Dashboard Stats: ${summary.dashboardStatsCount}\n`);
    console.log('🎯 Next steps:');
    console.log('   1. Create new Supabase project');
    console.log('   2. Run schema.sql in new project');
    console.log('   3. Run import.sql in new project');
    console.log('   4. Run migrate-images script');
    console.log('   5. Update .env.local with new credentials\n');

  } catch (error: any) {
    console.error('❌ Export failed:', error.message);
    process.exit(1);
  }
}

// Run export
exportDatabase();
