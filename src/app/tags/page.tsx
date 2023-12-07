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
      <h2 className="font-head text-3xl mb-6">All Tags:</h2>
      <ul>
        {rows.map((tag, index) => (
          <li
            key={index}
            className="inline-block bg-background rounded-full px-3 py-1 text-m font-semibold text-darkPurple mr-2 font-head hover:bg-darkPurple hover:text-white cursor-pointer"
          >
            {tag.tag_name}
          </li>
        ))}
      </ul>
      <TagInput></TagInput>
    </>
  );
}
