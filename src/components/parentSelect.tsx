"use server";
import pool from "@/db/vercel";

export default async function NoteSelect() {
  const { rows } = await pool.sql`SELECT title, id FROM notes;`;
  return (
    <select
      name="parent"
      className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    >
      <option value="">None</option>
      {rows.map((note) => (
        <option key={note.id} value={note.id}>
          {note.title}
        </option>
      ))}
    </select>
  );
}
