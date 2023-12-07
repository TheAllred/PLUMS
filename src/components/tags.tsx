import pool from "@/db/vercel";
import { Item } from "@/components/detail";
export default async function Tags({ id }) {
  const { rows } =
    await pool.sql<Item>`SELECT tag_name FROM tags where tag_id = ${id};`;
  return (
    <>
      <h2 className="large">Tags:</h2>
      <ul>
        {rows.map((tag, index) => (
          <li
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag.tag_name}
          </li>
        ))}
      </ul>
    </>
  );
}
