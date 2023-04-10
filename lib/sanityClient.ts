import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

  export const client = createClient({

    projectId: "p7iaog21",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
    token: process.env.SANITY_PUBLIC_TOKEN

  });
 
  const builder = imageUrlBuilder(client)

  export const urlFor = (source: any) => builder.image(source)