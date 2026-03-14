import { createClient } from "next-sanity";
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: "g9r0re28",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  stega: {
    studioUrl: process.env.NODE_ENV === 'production'
      ? 'https://excnews.sanity.studio'
      : 'http://localhost:3333',
  },
});
const builder = createImageUrlBuilder(client)

export function urlForImage(source: any): string {
  // Early exit + debug log
  if (!source) {
    console.warn('[urlForImage] No source provided:', source)
    return '/placeholder-1200x675.jpg'
  }

  // Handle both direct asset ref and nested structures
  const assetRef = source.asset?._ref || source._ref || source

  if (!assetRef || typeof assetRef !== 'string' || !assetRef.startsWith('image-')) {
    console.warn('[urlForImage] Invalid or missing asset ref:', source)
    return '/placeholder-1200x675.jpg'
  }

  try {
    const url = builder
      .image(source)
      .auto('format')
      .fit('max')
      .url()

    if (!url) {
      console.warn('[urlForImage] Builder returned empty URL for:', source)
      return '/placeholder-1200x675.jpg'
    }

    return url
  } catch (err) {
    console.error('[urlForImage] Build failed:', err, source)
    return '/placeholder-1200x675.jpg'
  }
}