/**
 * Import Database Script
 * Imports all data from exported JSON files to new Supabase project
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// New Supabase credentials
const NEW_SUPABASE_URL = process.env.NEW_SUPABASE_URL!;
const NEW_SUPABASE_KEY = process.env.NEW_SUPABASE_KEY!;

if (!NEW_SUPABASE_URL || !NEW_SUPABASE_KEY) {
  console.error('❌ Error: Missing NEW Supabase credentials');
  console.error('Set NEW_SUPABASE_URL and NEW_SUPABASE_KEY in .env.local');
  console.error('\nExample:');
  console.error('NEW_SUPABASE_URL=https://xxxxx.supabase.co');
  console.error('NEW_SUPABASE_KEY=your_service_role_key');
  process.exit(1);
}

const supabase = createClient(NEW_SUPABASE_URL, NEW_SUPABASE_KEY);

async function importDatabase() {
  console.log('🚀 Starting database import...\n');
  console.log(`📥 Destination: ${NEW_SUPABASE_URL}\n`);

  const migrationDir = path.join(process.cwd(), 'migration-data');

  // Check if migration data exists
  if (!fs.existsSync(migrationDir)) {
    console.error('❌ Error: migration-data directory not found');
    console.error('Run "npm run export:database" first to export data');
    process.exit(1);
  }

  try {
    // Import products
    const productsFile = path.join(migrationDir, 'products.json');
    if (fs.existsSync(productsFile)) {
      console.log('📦 Importing products...');
      const products = JSON.parse(fs.readFileSync(productsFile, 'utf-8'));

      // Insert products in batches
      const batchSize = 10;
      let successCount = 0;
      let failCount = 0;

      for (let i = 0; i < products.length; i += batchSize) {
        const batch = products.slice(i, i + batchSize);
        
        const { error } = await supabase
          .from('products')
          .insert(batch);

        if (error) {
          console.error(`   ❌ Batch ${Math.floor(i / batchSize) + 1} failed:`, error.message);
          failCount += batch.length;
        } else {
          console.log(`   ✅ Imported batch ${Math.floor(i / batchSize) + 1} (${batch.length} products)`);
          successCount += batch.length;
        }
      }

      console.log(`✅ Products import completed: ${successCount} success, ${failCount} failed\n`);
    } else {
      console.warn('⚠️  products.json not found, skipping...\n');
    }

    // Import dashboard stats
    const statsFile = path.join(migrationDir, 'dashboard_stats.json');
    if (fs.existsSync(statsFile)) {
      console.log('📊 Importing dashboard stats...');
      const stats = JSON.parse(fs.readFileSync(statsFile, 'utf-8'));

      if (stats && stats.length > 0) {
        const { error } = await supabase
          .from('dashboard_stats')
          .insert(stats);

        if (error) {
          console.error(`   ❌ Failed:`, error.message);
        } else {
          console.log(`   ✅ Imported ${stats.length} record(s)`);
        }
      }
      console.log('');
    } else {
      console.warn('⚠️  dashboard_stats.json not found, skipping...\n');
    }

    // Verify import
    console.log('🔍 Verifying import...');
    const { count: productCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });

    const { count: statsCount } = await supabase
      .from('dashboard_stats')
      .select('*', { count: 'exact', head: true });

    console.log(`   Products in database: ${productCount || 0}`);
    console.log(`   Dashboard stats in database: ${statsCount || 0}\n`);

    console.log('✅ Import completed successfully!\n');
    console.log('🎯 Next steps:');
    console.log('   1. Run "npm run migrate:images" to migrate product images');
    console.log('   2. Update .env.local with new Supabase credentials');
    console.log('   3. Test the application locally');
    console.log('   4. Update Vercel environment variables');
    console.log('   5. Deploy to production\n');

  } catch (error: any) {
    console.error('❌ Import failed:', error.message);
    process.exit(1);
  }
}

// Run import
importDatabase();
