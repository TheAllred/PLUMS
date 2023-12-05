"use server";
import { revalidatePath } from "next/cache";
import pool from "@/db/vercel";
import { NewItem } from "@/components/modalForm";

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createNote(NewItem: NewItem) {
  console.log("createNote", NewItem);
  try {
    await pool.sql<NewItem>`
    INSERT INTO notes (title, description, attachment,attachmentalt, authorid)
    VALUES (${NewItem.title}, ${NewItem.description}, ${NewItem.attachment}, ${NewItem.attachmentalt}, ${NewItem.authorid})
  `;

    revalidatePath("/");
    console.log("Added todo");
  } catch (e) {
    console.log(e);
    console.log("Failed to add todo");
  }
}

// export async function deleteTodo(prevState: any, formData: FormData) {
//   const schema = z.object({
//     id: z.string().min(1),
//     todo: z.string().min(1),
//   });
//   const data = schema.parse({
//     id: formData.get("id"),
//     todo: formData.get("todo"),
//   });

//   try {
//     await sql`
//       DELETE FROM todos
//       WHERE id = ${data.id};
//     `;

//     revalidatePath("/");
//     return { message: `Deleted todo ${data.todo}` };
//   } catch (e) {
//     return { message: "Failed to delete todo" };
//   }
// }
