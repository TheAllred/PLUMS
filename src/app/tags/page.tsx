import TagInput from "@/components/tagInput";
import pool from "@/db/vercel";
import { deleteTag } from "../actions";
export default async function TagsPage() {
  const { rows } = await pool.sql`SELECT tag_name FROM tags;`;
  const handleDelete = (id: number) => {
    deleteTag(id);
  };
  return (
    <>
      <h2 className="large">All Tags:</h2>
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
      <TagInput></TagInput>
    </>
  );
}
