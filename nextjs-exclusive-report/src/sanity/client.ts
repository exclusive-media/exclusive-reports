import { createClient } from "next-sanity";
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: "g9r0re28",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
const builder = createImageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}