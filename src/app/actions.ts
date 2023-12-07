"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import pool from "@/db/vercel";
import { NewItem } from "@/components/modalForm";
import { Item } from "@/components/notes";
import { UpdatedItem } from "@/components/updateForm";

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
  revalidatePath("/", "layout");
  redirect("/topics");
}
export async function updateNote(UpdatedItem: UpdatedItem) {
  console.log("updateNote", UpdatedItem);
  try {
    await pool.sql<UpdatedItem>`
    UPDATE notes
    SET title = ${UpdatedItem.title},
    description = ${UpdatedItem.description},
    attachment = ${UpdatedItem.attachment},
    attachmentalt = ${UpdatedItem.attachmentalt},
    authorid = ${UpdatedItem.authorid}
    WHERE id = ${UpdatedItem.id};
  `;
    console.log("#####Updated note####");
  } catch (e) {
    console.log(e);
    console.log("Failed to update note");
  }
  revalidatePath("/", "layout");
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
  revalidatePath("/", "layout");
  redirect(`/topics`);
}

export async function pinNote(id: number, pinnedState: boolean) {
  const setPinned = pinnedState ? false : true;

  try {
    await pool.sql<UpdatedItem>`
    UPDATE notes
    SET pinned = ${setPinned}
    WHERE id = ${id};
  `;
    console.log("#####Toggled pinned note####");
  } catch (e) {
    console.log(e);
    console.log("Failed to pin note");
  }
  revalidatePath("/", "layout");
  redirect("/topics");
}
