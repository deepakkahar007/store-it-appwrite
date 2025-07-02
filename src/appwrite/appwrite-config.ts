import { env } from "@/env/envSchema";
import { Client, Account, Databases, Storage, ID } from "appwrite";

export const appwrite_client = new Client()
  .setEndpoint(env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(appwrite_client);
export const databases = new Databases(appwrite_client);
export const storage = new Storage(appwrite_client);

export const id = ID.unique();
