'use client'

import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends NextImageProps {}

/**
 * Image component that wraps Next.js Image with project-specific codestyle.
 */
export const Image: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} />
}

Image.displayName = 'Image'

export default Image
