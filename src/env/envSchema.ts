import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z
      .string()
      .trim()
      .url()
      .min(5, "the minimum length is 5"),
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: z
      .string()
      .trim()
      .cuid()
      .min(5, "the minimum length is 5"),
    NEXT_PUBLIC_APPWRITE_DATABASE: z
      .string()
      .trim()
      .min(5, "the minimum length is 5"),
    NEXT_PUBLIC_USERS_COLLECTION: z
      .string()
      .trim()
      .min(5, "the minimum length is 5"),
    NEXT_PUBLIC_FILES_COLLECTION: z
      .string()
      .trim()
      .min(5, "the minimum length is 5"),
    NEXT_PUBLIC_STORAGE: z.string().trim().min(5, "the minimum length is 5"),
  },
  server: {
    APPWRITE_KEY: z.string().trim().min(5, "the minimum length is 5"),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID:
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    NEXT_PUBLIC_APPWRITE_DATABASE: process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    NEXT_PUBLIC_USERS_COLLECTION: process.env.NEXT_PUBLIC_USERS_COLLECTION,
    NEXT_PUBLIC_FILES_COLLECTION: process.env.NEXT_PUBLIC_FILES_COLLECTION,
    NEXT_PUBLIC_STORAGE: process.env.NEXT_PUBLIC_STORAGE,
  },
});
