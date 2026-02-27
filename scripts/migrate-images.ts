/**
 * Image Migration Script
 * Migrates all images from old Supabase storage to new Supabase storage
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

// Old Supabase credentials
const OLD_SUPABASE_URL = process.env.OLD_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!;
const OLD_SUPABASE_KEY = process.env.OLD_SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY!;

// New Supabase credentials
const NEW_SUPABASE_URL = process.env.NEW_SUPABASE_URL!;
const NEW_SUPABASE_KEY = process.env.NEW_SUPABASE_KEY!;

if (!OLD_SUPABASE_URL || !OLD_SUPABASE_KEY) {
  console.error('❌ Error: Missing OLD Supabase credentials');
  console.error('Set OLD_SUPABASE_URL and OLD_SUPABASE_KEY in .env.local');
  process.exit(1);
}

if (!NEW_SUPABASE_URL || !NEW_SUPABASE_KEY) {
  console.error('❌ Error: Missing NEW Supabase credentials');
  console.error('Set NEW_SUPABASE_URL and NEW_SUPABASE_KEY in .env.local');
  process.exit(1);
}

const oldSupabase = createClient(OLD_SUPABASE_URL, OLD_SUPABASE_KEY);
const newSupabase = createClient(NEW_SUPABASE_URL, NEW_SUPABASE_KEY);

const BUCKET_NAME = 'product-images';
const TEMP_DIR = path.join(process.cwd(), 'temp-images');

// Helper function to download file
function downloadFile(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function migrateImages() {
  console.log('🚀 Starting image migration...\n');
  console.log(`📤 Source: ${OLD_SUPABASE_URL}`);
  console.log(`📥 Destination: ${NEW_SUPABASE_URL}\n`);

  // Create temp directory
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR);
    console.log('📁 Created temporary directory\n');
  }

  try {
    // Step 1: List all files in old storage
    console.log('📋 Listing files from old storage...');
    const { data: files, error: listError } = await oldSupabase.storage
      .from(BUCKET_NAME)
      .list();

    if (listError) {
      throw new Error(`Failed to list files: ${listError.message}`);
    }

    console.log(`✅ Found ${files?.length || 0} files\n`);

    if (!files || files.length === 0) {
      console.log('⚠️  No files to migrate');
      return;
    }

    // Step 2: Check if bucket exists in new storage
    console.log('🪣 Checking destination bucket...');
    const { data: buckets } = await newSupabase.storage.listBuckets();
    const bucketExists = buckets?.some(b => b.name === BUCKET_NAME);

    if (!bucketExists) {
      console.log('⚠️  Bucket does not exist in new project');
      console.log('Creating bucket...');
      const { error: createError } = await newSupabase.storage.createBucket(BUCKET_NAME, {
        public: true
      });
      if (createError) {
        throw new Error(`Failed to create bucket: ${createError.message}`);
      }
      console.log('✅ Bucket created\n');
    } else {
      console.log('✅ Bucket exists\n');
    }

    // Step 3: Migrate each file
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;
      
      console.log(`[${i + 1}/${files.length}] Migrating: ${fileName}`);

      try {
        // Download from old storage
        const { data: downloadData, error: downloadError } = await oldSupabase.storage
          .from(BUCKET_NAME)
          .download(fileName);

        if (downloadError) {
          throw new Error(`Download failed: ${downloadError.message}`);
        }

        // Convert blob to buffer
        const buffer = Buffer.from(await downloadData.arrayBuffer());

        // Upload to new storage
        const { error: uploadError } = await newSupabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, buffer, {
            contentType: downloadData.type,
            cacheControl: '3600',
            upsert: true
          });

        if (uploadError) {
          throw new Error(`Upload failed: ${uploadError.message}`);
        }

        console.log(`   ✅ Success (${(buffer.length / 1024).toFixed(2)} KB)`);
        successCount++;

      } catch (error: any) {
        console.log(`   ❌ Failed: ${error.message}`);
        failCount++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Migration Summary:');
    console.log('='.repeat(50));
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📁 Total: ${files.length}`);
    console.log('='.repeat(50) + '\n');

    if (successCount === files.length) {
      console.log('🎉 All images migrated successfully!\n');
    } else if (successCount > 0) {
      console.log('⚠️  Some images failed to migrate. Check errors above.\n');
    } else {
      console.log('❌ Migration failed. No images were transferred.\n');
    }

    // Cleanup temp directory
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true });
      console.log('🧹 Cleaned up temporary files\n');
    }

    console.log('🎯 Next steps:');
    console.log('   1. Verify images in new Supabase Storage');
    console.log('   2. Test image loading on website');
    console.log('   3. Update .env.local with new credentials');
    console.log('   4. Deploy to production\n');

  } catch (error: any) {
    console.error('❌ Migration failed:', error.message);
    
    // Cleanup on error
    if (fs.existsSync(TEMP_DIR)) {
      fs.rmSync(TEMP_DIR, { recursive: true });
    }
    
    process.exit(1);
  }
}

// Run migration
migrateImages();
