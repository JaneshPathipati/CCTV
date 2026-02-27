// Script to migrate products from JSON to Supabase
// Run with: npx ts-node scripts/migrate-to-supabase.ts

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  console.error('Please make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function migrateProducts() {
  try {
    console.log('🚀 Starting product migration to Supabase...\n')

    // Read the JSON file
    const jsonPath = path.join(process.cwd(), 'public', 'hso-camera-products.json')
    const jsonData = fs.readFileSync(jsonPath, 'utf-8')
    const data = JSON.parse(jsonData)

    console.log(`📦 Found ${data.products.length} products to migrate\n`)

    // Migrate products in batches
    const batchSize = 50
    let successCount = 0
    let errorCount = 0

    for (let i = 0; i < data.products.length; i += batchSize) {
      const batch = data.products.slice(i, i + batchSize)
      
      console.log(`Processing batch ${Math.floor(i / batchSize) + 1}...`)

      const { data: insertedData, error } = await supabase
        .from('products')
        .upsert(batch, { onConflict: 'id' })

      if (error) {
        console.error(`❌ Error in batch ${Math.floor(i / batchSize) + 1}:`, error.message)
        errorCount += batch.length
      } else {
        successCount += batch.length
        console.log(`✅ Successfully migrated ${batch.length} products`)
      }
    }

    console.log('\n📊 Migration Summary:')
    console.log(`✅ Successful: ${successCount}`)
    console.log(`❌ Failed: ${errorCount}`)
    console.log(`📦 Total: ${data.products.length}`)

    if (errorCount === 0) {
      console.log('\n🎉 All products migrated successfully!')
    }

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateProducts()
