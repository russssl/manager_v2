import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      username: {
        type: "string",
        required: true,
        unique: true,
        input: true,
      },
      surname: {
        type: "string",
        required: true,
        input: true,
      }
    }
  }
});
export type Session = typeof auth.$Infer.Session;