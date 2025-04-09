import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tojo-blog",
  apiKey: process.env.API_KEY,
});