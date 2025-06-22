/*
  Simple node script to seed Supabase products table using local JSON data.
  Usage:
    npx ts-node scripts/seedProducts.ts
  Requires environment variables SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
*/
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const supabaseUrl = process.env.SUPABASE_URL as string
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string

if (!supabaseUrl || !serviceKey) {
  console.error('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceKey)

interface Product {
  id: number
  slug: string
  name: string
  shortName: string
  price: number
  category: string
  description: string
  features: string
  image: any
  categoryImage: any
  cartImage: string
  gallery: any
  includedItems: any
  new: boolean
}

async function run() {
  const dataPath = path.join(__dirname, '..', 'src', 'data', 'products.json')
  const json = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as { products: Product[] }

  for (const p of json.products) {
    const { error } = await supabase.from('products').upsert({
      slug: p.slug,
      name: p.name,
      short_name: p.shortName,
      price: p.price,
      category: p.category,
      description: p.description,
      features: p.features,
      images: {
        image: p.image,
        categoryImage: p.categoryImage,
        cartImage: p.cartImage,
      },
      included_items: p.includedItems,
      gallery: p.gallery,
    })
    if (error) {
      console.error('Error inserting product', p.slug, error.message)
    } else {
      console.log('Upserted', p.slug)
    }
  }
}

run()
