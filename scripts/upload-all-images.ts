import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const IMAGE_FOLDER = path.join(process.cwd(), 'public/Velvu 12MP IP Low Light Color Bullet Camera ST-VB IP12002LL');

async function uploadAllImages() {
  console.log('🚀 Starting bulk image upload to Supabase Storage...\n');

  try {
    // Get all image files from the folder
    const files = fs.readdirSync(IMAGE_FOLDER);
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
    );

    console.log(`📦 Found ${imageFiles.length} images to upload\n`);

    let successCount = 0;
    let failCount = 0;

    for (const fileName of imageFiles) {
      try {
        const filePath = path.join(IMAGE_FOLDER, fileName);
        const fileBuffer = fs.readFileSync(filePath);
        
        // Generate new filename with timestamp
        const fileExt = path.extname(fileName);
        const baseName = path.basename(fileName, fileExt);
        const newFileName = `${baseName}-${Date.now()}${fileExt}`;

        console.log(`⬆️  Uploading: ${fileName} -> ${newFileName}`);

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
          .from('product-images')
          .upload(newFileName, fileBuffer, {
            contentType: `image/${fileExt.slice(1)}`,
            cacheControl: '3600',
            upsert: false
          });

        if (error) {
          console.log(`   ❌ Failed: ${error.message}`);
          failCount++;
          continue;
        }

        // Try to find matching product in database by image name
        const { data: products, error: dbError } = await supabase
          .from('products')
          .select('id, name, image')
          .eq('image', fileName);

        if (products && products.length > 0) {
          // Update product with new image path
          for (const product of products) {
            await supabase
              .from('products')
              .update({ image: newFileName })
              .eq('id', product.id);
            
            console.log(`   ✅ Updated product: ${product.name}`);
          }
        } else {
          console.log(`   ⚠️  No matching product found for: ${fileName}`);
        }

        successCount++;
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error: any) {
        console.log(`   ❌ Error: ${error.message}`);
        failCount++;
      }
    }

    console.log('\n📊 Upload Summary:');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📦 Total: ${imageFiles.length}`);
    console.log('\n🎉 Bulk upload complete!');

  } catch (error: any) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

uploadAllImages();
