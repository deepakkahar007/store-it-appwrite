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
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID:
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  },
});
