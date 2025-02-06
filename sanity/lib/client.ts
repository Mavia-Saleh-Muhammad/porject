import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1iy102dq",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Use token for private data
});
