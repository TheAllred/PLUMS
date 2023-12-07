import pool from "@/db/vercel";
import { Item } from "@/types/types";
export default async function Tags({ id }) {
  const { rows } =
    await pool.sql<Item>`SELECT tag_name FROM tags where tag_id = ${id};`;
  return (
    <>
      <h2 className="text-xl font-head mt-8">Tags:</h2>
      <ul>
        {rows.map((tag, index) => (
          <li
            key={index}
            className="inline-block bg-background rounded-full px-3 py-1 text-m font-semibold text-darkPurple mr-2 font-head hover:bg-darkPurple hover:text-white mt-3"
          >
            {tag.tag_name}
          </li>
        ))}
      </ul>
    </>
  );
}
