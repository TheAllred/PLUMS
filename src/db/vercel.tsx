import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString:
    "postgres://default:neq7WyFxKRH4@ep-still-morning-37950458-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
    //This connection string should be en environment variable
});

export default pool;