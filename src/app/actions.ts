"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import pool from "@/db/vercel";
import { NewItem } from "@/components/modalForm";
import { Item } from "@/components/notes";

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

    console.log("Added todo");
  } catch (e) {
    console.log(e);
    console.log("Failed to add todo");
  }
  revalidatePath("/topics");
  redirect("/topics");
}
export async function deleteNote(id: number) {
  try {
    const item: Item = await pool.sql<Item>`
    DELETE FROM notes where id =${id} RETURNING id;
  `;

    console.log(id);
    console.log("Deleted todo");
  } catch (e) {
    console.log(e);
    console.log("Failed to delete note");
  }
  revalidatePath("/topics");
  redirect(`/topics`);
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
