"use server";

import {
  createAdminClient,
  createSessionClient,
} from "@/appwrite/nodeAppwrite";
import { env } from "@/env/envSchema";
import { parseStringfy } from "@/lib/utils";
import { ID, Query } from "node-appwrite";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    env.NEXT_PUBLIC_APPWRITE_DATABASE,
    env.NEXT_PUBLIC_USERS_COLLECTION,
    [Query.equal("email", [email])]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, error);
  throw new Error(message);
};

const sendEmailOTP = async (email: string) => {
  const { account } = await createSessionClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (err) {
    handleError(err, "Error creating email token");
  }
};

export const createAccount = async (full_name: string, email: string) => {
  const existingUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP(email);

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      env.NEXT_PUBLIC_APPWRITE_DATABASE,
      env.NEXT_PUBLIC_USERS_COLLECTION,
      ID.unique(),
      {
        full_name,
        email,
        account_id: accountId,
        avatar:
          "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png",
      }
    );
  }

  return parseStringfy(accountId);
};
