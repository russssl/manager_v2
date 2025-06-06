import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    REDIS_KV_URL: z.string().url().optional(),
    REDIS_KV_REST_API_READ_ONLY_TOKEN: z.string().optional(),
    REDIS_KV_REST_API_TOKEN: z.string().optional(),
    REDIS_KV_REST_API_URL: z.string().url().optional(),
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    EXCHANGE_RATE_URL: z.string().optional(),
    EXCHANGE_RATE_API_KEY: z.string().optional(),
  },
  client: {
    // NEXT_PUBLIC_APP_URL: z.string().url().optional(),
    // NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    REDIS_KV_URL: process.env.REDIS_KV_URL,
    REDIS_KV_REST_API_READ_ONLY_TOKEN: process.env.REDIS_KV_REST_API_READ_ONLY_TOKEN,
    REDIS_KV_REST_API_TOKEN: process.env.REDIS_KV_REST_API_TOKEN,
    REDIS_KV_REST_API_URL: process.env.REDIS_KV_REST_API_URL,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EXCHANGE_RATE_URL: process.env.EXCHANGE_RATE_URL,
    EXCHANGE_RATE_API_KEY: process.env.EXCHANGE_RATE_API_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});