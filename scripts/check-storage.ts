import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkStorage() {
  console.log('🔍 Checking Supabase Storage...\n');

  // List all buckets
  const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
  
  if (bucketsError) {
    console.error('❌ Error listing buckets:', bucketsError);
    return;
  }

  console.log('📦 Available buckets:');
  buckets.forEach(bucket => {
    console.log(`  - ${bucket.name} (${bucket.public ? 'public' : 'private'})`);
  });
  console.log('');

  // Check product-images bucket
  const { data: files, error: filesError } = await supabase.storage
    .from('product-images')
    .list('', { limit: 10 });

  if (filesError) {
    console.error('❌ Error listing files:', filesError);
    return;
  }

  console.log('📁 Files in product-images bucket (first 10):');
  if (files && files.length > 0) {
    files.forEach(file => {
      console.log(`  - ${file.name}`);
      const { data } = supabase.storage
        .from('product-images')
        .getPublicUrl(file.name);
      console.log(`    URL: ${data.publicUrl}`);
    });
  } else {
    console.log('  (empty)');
  }

  // Check a few products from database
  console.log('\n📊 Sample products from database:');
  const { data: products, error: dbError } = await supabase
    .from('products')
    .select('id, name, image')
    .not('image', 'is', null)
    .limit(5);

  if (dbError) {
    console.error('❌ Error querying products:', dbError);
  } else if (products) {
    products.forEach(p => {
      console.log(`  ${p.id}: ${p.name}`);
      console.log(`    Image: ${p.image}`);
    });
  }
}

checkStorage();
