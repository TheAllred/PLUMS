"use server";
import pool from "@/db/vercel";

export default async function NoteSelect() {
  const { rows } = await pool.sql`SELECT title, id FROM notes;`;
  return (
    <select name="parent">
      <option value={null}>None</option>
      {rows.map((note) => (
        <option key={note.id} value={note.id}>
          {note.title}
        </option>
      ))}
    </select>
  );
}
