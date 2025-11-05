import { cpSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import rss from './rss.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function postbuild() {
  await rss()

  // Copy generated OG images from public/ to out/ since they're generated after next build
  const publicOgImagesDir = join(__dirname, '../public/og-images')
  const outOgImagesDir = join(__dirname, '../out/og-images')

  if (existsSync(publicOgImagesDir)) {
    // Ensure the out/og-images directory exists
    const outDir = join(__dirname, '../out')
    if (!existsSync(outDir)) {
      throw new Error('out/ directory does not exist. Make sure next build ran successfully.')
    }

    // Use cpSync with recursive option to copy the entire directory
    cpSync(publicOgImagesDir, outOgImagesDir, { recursive: true, force: true })
    console.log('✅ Copied OG images to out/ directory')
  } else {
    console.log('⚠️  No OG images found in public/og-images directory')
  }
}

postbuild()
