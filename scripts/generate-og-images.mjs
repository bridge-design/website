#!/usr/bin/env node

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createHash } from 'crypto'
import sharp from 'sharp'
import { allCaseStudies } from '../.contentlayer/generated/index.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = join(__dirname, '../public')
const ogImagesDir = join(publicDir, 'og-images', 'case-studies')
const colorsCssPath = join(__dirname, '../tokens/colors.css')
const logoPath = join(__dirname, '../components-new/Logo/bridge_logo.svg')

// Ensure the og-images directory exists
if (!existsSync(ogImagesDir)) {
  mkdirSync(ogImagesDir, { recursive: true })
}

// Parse colors from colors.css
function parseColorsFromCSS() {
  const cssContent = readFileSync(colorsCssPath, 'utf-8')
  const colorMap = new Map()
  
  // Extract only the :root block (everything before @define-mixin dark-theme)
  // Split on @define-mixin to get only the light theme section
  const lightThemeSection = cssContent.split('@define-mixin')[0]
  const rootMatch = lightThemeSection.match(/:root\s*{([\s\S]*)}/)
  if (!rootMatch) {
    throw new Error('Could not find :root block in colors.css')
  }
  const rootBlock = rootMatch[1]
  
  // Extract all color definitions (--btg-color-*: #hex;) from :root block only
  const colorRegex = /--([^:]+):\s*(#[0-9a-fA-F]{6});/g
  let match
  while ((match = colorRegex.exec(rootBlock)) !== null) {
    const varName = match[1].trim()
    const hexValue = match[2]
    colorMap.set(`--${varName}`, hexValue)
  }
  
  // Resolve var() references recursively
  function resolveVar(varName) {
    if (!varName || varName.startsWith('#')) {
      return varName
    }
    const value = colorMap.get(varName.trim())
    if (!value) return null
    // If the value is another var reference, resolve it
    if (value.startsWith('var(')) {
      const innerVar = value.match(/var\(([^)]+)\)/)?.[1]?.trim()
      return innerVar ? resolveVar(innerVar) : value
    }
    return value
  }
  
  // Extract HERO background colors (not brand colors) and resolve them from :root block only
  // Hero colors are: --btg-hero-background-teal, --btg-hero-background-pink, 
  // --btg-hero-background-blue, --btg-hero-background-sand
  // These are different from brand colors (--btg-color-brand-*)
  const heroColors = {}
  const heroRegex = /--btg-hero-background-(\w+):\s*var\(([^)]+)\);/g
  while ((match = heroRegex.exec(rootBlock)) !== null) {
    const colorName = match[1]
    const varRef = match[2].trim()
    const resolvedColor = resolveVar(varRef)
    if (resolvedColor && resolvedColor.startsWith('#')) {
      heroColors[colorName] = resolvedColor
    }
  }
  
  // Validate we have hero colors (not brand colors)
  if (Object.keys(heroColors).length === 0) {
    throw new Error('No hero background colors found in colors.css')
  }
  
  // Extract other needed colors
  const colors = {
    // Background colors
    background: colorMap.get('--btg-color-neutral-1000') || '#faf7ee',
    backgroundAlt: colorMap.get('--btg-color-neutral-900') || '#f0eadb',
    
    // Text colors
    headerText: colorMap.get('--btg-color-neutral-100') || '#1a1814',
    textPrimary: colorMap.get('--btg-color-neutral-100') || '#1a1814',
    textSecondary: colorMap.get('--btg-color-neutral-300') || '#46413a',
    textTertiary: colorMap.get('--btg-color-neutral-500') || '#746b60',
    
    // Accent colors
    accent: colorMap.get('--btg-color-primary-500') || '#01949a',
    accentDark: colorMap.get('--btg-color-highlight-500') || '#004369',
    
    // Hero background colors (for random selection)
    heroColors: heroColors
  }
  
  return colors
}

const colors = parseColorsFromCSS()

// Get hero background colors as an array
const heroBackgroundColors = Object.values(colors.heroColors)

// Read and parse logo SVG to extract paths
function getLogoPaths() {
  const logoContent = readFileSync(logoPath, 'utf-8')
  // Extract all path elements from the logo SVG
  const pathMatches = logoContent.matchAll(/<path[^>]*d="([^"]+)"[^>]*\/?>/g)
  const paths = []
  for (const match of pathMatches) {
    paths.push(match[1])
  }
  return paths
}

const logoPaths = getLogoPaths()

// Helper function to get a consistent but varied color for a slug
function getHeroColorForSlug(slug) {
  if (heroBackgroundColors.length === 0) {
    return '#d9627f' // fallback to pink
  }
  // Use hash of slug to deterministically select a color
  const hash = createHash('md5').update(slug).digest('hex')
  const index = parseInt(hash.substring(0, 8), 16) % heroBackgroundColors.length
  return heroBackgroundColors[index]
}

// Helper function to split title into multiple lines if needed
function splitTitleIntoLines(title, maxCharsPerLine = 35) {
  if (title.length <= maxCharsPerLine) {
    return [title]
  }
  
  const words = title.split(' ')
  const lines = []
  let currentLine = ''
  
  for (const word of words) {
    if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
      currentLine = currentLine ? currentLine + ' ' + word : word
    } else {
      if (currentLine) {
        lines.push(currentLine)
      }
      currentLine = word
    }
  }
  
  if (currentLine) {
    lines.push(currentLine)
  }
  
  return lines
}

// SVG template for OG images with Bridge the Gap design
function generateOGImageSVG(title, headerBg) {
  const titleLines = splitTitleIntoLines(title, 35)
  const headerHeight = 134 // Reduced by 33% from 200
  const waveHeight = 120
  
  // Calculate title Y position - starts after header and wave with spacing
  const titleStartY = headerHeight + waveHeight + 110 // Wave ends at headerHeight + waveHeight, add 110px spacing
  
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Brand gradient for subtle background -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.background};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors.backgroundAlt};stop-opacity:1" />
    </linearGradient>
    <!-- Clip path for wave -->
    <clipPath id="waveClip">
      <rect x="0" y="0" width="1200" height="120"/>
    </clipPath>
  </defs>
  
  <!-- Main background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Colored header section -->
  <rect width="1200" height="${headerHeight}" fill="${headerBg}"/>
  
  <!-- Horizontal wave at the bottom of header -->
  <!-- Using the exact wave pattern from HorizontalWave component with proper scaling -->
  <!-- Position wave 1px above headerHeight to eliminate gap -->
  <g transform="translate(0, ${headerHeight - 1})">
    <svg width="1200" height="120" viewBox="0 0 35.28 2.17" preserveAspectRatio="none">
      <!-- Wave layer 1 -->
      <path
        d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
        fill="${headerBg}"
      />
      <!-- Wave layer 2 -->
      <path
        d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
        opacity=".5"
        fill="${headerBg}"
      />
      <!-- Wave layer 3 -->
      <path
        d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
        opacity=".5"
        fill="${headerBg}"
      />
    </svg>
  </g>
  
  <!-- Case Study sign in header -->
  <text x="600" y="${Math.round(headerHeight / 2) + 11}" text-anchor="middle" fill="${colors.headerText}" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="600" letter-spacing="0.5">
    Bridge-the-Gap → Case Study
  </text>
  
  <!-- Main title (below the wave) -->
  ${titleLines.map((line, index) => `
  <text x="600" y="${titleStartY + (index * 60)}" text-anchor="middle" fill="${colors.textPrimary}" font-family="Arial, Helvetica, sans-serif" font-size="${index === 0 ? '56' : '56'}" font-weight="800" letter-spacing="-0.5">
    ${line}
  </text>
  `).join('')}
  
  <!-- Bridge the Gap logo (below title) -->
  <g transform="translate(${600 - 219 / 2}, ${titleStartY + (titleLines.length * 60) + 15})">
    <svg width="219" height="28" viewBox="0 0 219 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${logoPaths.map(path => `<path d="${path}" fill="${colors.textPrimary}"/>`).join('\n      ')}
    </svg>
  </g>
  
  <!-- Subtle accent decoration -->
  <circle cx="80" cy="${headerHeight / 2}" r="4" fill="rgba(26, 24, 20, 0.1)"/>
  <circle cx="1120" cy="${headerHeight / 2}" r="4" fill="rgba(26, 24, 20, 0.1)"/>
  
  <!-- Upside-down wave at the bottom -->
  <!-- Flip both vertically and horizontally, position at bottom of canvas -->
  <g transform="translate(1200, 630) scale(-1, -1)">
    <svg width="1200" height="120" viewBox="0 0 35.28 2.17" preserveAspectRatio="none">
      <!-- Wave layer 1 -->
      <path
        d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
        fill="${headerBg}"
      />
      <!-- Wave layer 2 -->
      <path
        d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
        opacity=".5"
        fill="${headerBg}"
      />
      <!-- Wave layer 3 -->
      <path
        d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
        opacity=".5"
        fill="${headerBg}"
      />
    </svg>
  </g>
</svg>
  `.trim()
}

// Convert SVG to PNG using sharp
async function convertSvgToPng(svgString, outputPath) {
  try {
    // Use sharp with SVG density settings for better font rendering
    // density: 72 DPI is standard, but 150-300 gives better quality
    await sharp(Buffer.from(svgString), {
      density: 150, // Higher density for better text rendering
    })
      .png()
      .toFile(outputPath)
    return true
  } catch (error) {
    console.error('Error converting SVG to PNG:', error)
    return false
  }
}

console.log('🎨 Generating OG images for case studies...')

// Generate OG images for case studies that don't have custom images
async function generateOGImages() {
  for (const caseStudy of allCaseStudies) {
    // Skip if the case study already has custom images
    if (caseStudy.images) {
      console.log(`⏭️  Skipping ${caseStudy.title} - has custom images`)
      continue
    }

    const slug = caseStudy.slug
    const title = caseStudy.title
    const baseFilename = `${slug.replace(/\//g, '-')}`
    const svgFilename = `${baseFilename}.svg`
    const pngFilename = `${baseFilename}.png`
    const svgFilepath = join(ogImagesDir, svgFilename)
    const pngFilepath = join(ogImagesDir, pngFilename)

    // Get a random hero background color for this case study (deterministic based on slug)
    const headerBg = getHeroColorForSlug(slug)

    // Generate SVG
    const svgContent = generateOGImageSVG(title, headerBg)
    
    try {
      // Write SVG file (for reference/debugging)
      writeFileSync(svgFilepath, svgContent)
      
      // Convert SVG to PNG for social media compatibility
      const pngSuccess = await convertSvgToPng(svgContent, pngFilepath)
      if (pngSuccess) {
        console.log(`✅ Generated OG image: ${pngFilename}`)
      } else {
        console.log(`⚠️  Generated SVG but PNG conversion failed: ${svgFilename}`)
      }
    } catch (error) {
      console.error(`❌ Failed to generate OG image for ${title}:`, error)
    }
  }
}

generateOGImages()
  .then(() => {
    console.log('🎉 OG image generation complete!')
  })
  .catch((error) => {
    console.error('❌ Error during OG image generation:', error)
    process.exit(1)
  })
