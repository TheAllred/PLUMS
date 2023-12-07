import Cards from "@/components/card";
import pool from "@/db/vercel";
import { Item } from "@/components/detail";
export default async function PinnedNotes() {
  const { rows } =
    await pool.sql<Item>`SELECT * FROM notes WHERE pinned = true;`;
  return (
    <>
      <Cards items={rows} />
    </>
  );
}
