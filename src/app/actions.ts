"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import pool from "@/db/vercel";
import { NewItem } from "@/types/types";
import { Item } from "@/types/types";
import { UpdatedItem } from "@/types/types";

export async function createNote(newItem: NewItem) {
  console.log("createNote", newItem);

  await pool.sql<NewItem>`
    INSERT INTO notes (
      title
      , description
      , attachment
      ,attachmentalt
      , authorid
      , parent_note
      , referencelink)
    VALUES (
      ${newItem.title},
       ${newItem.description},
       ${newItem.attachment},
       ${newItem.attachmentalt},
       ${newItem.authorid},
       ${newItem.parentNote},
       ${newItem.referencelink})
  `;
  revalidatePath("/", "layout");
  redirect(`/topics`);
}
export async function updateNote(updatedItem: UpdatedItem) {
  console.log("updateNote", updatedItem);

  await pool.sql<UpdatedItem>`
    UPDATE notes
    SET title = ${updatedItem.title},
    description = ${updatedItem.description},
    attachment = ${updatedItem.attachment},
    attachmentalt = ${updatedItem.attachmentalt},
    referencelink = ${updatedItem.referencelink}
    WHERE id = ${updatedItem.id};
  `;
  revalidatePath("/", "layout");
  redirect("/topics");
}
export async function deleteNote(id: number) {
  try {
    await pool.sql<Item>`
    DELETE FROM notes where id =${id} ;
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

  await pool.sql`
    UPDATE notes
    SET pinned = ${setPinned}
    WHERE id = ${id};
  `;

  revalidatePath("/", "layout");
  redirect("/topics");
}

export async function createTag(tagName: string) {
  try {
    await pool.sql`
    INSERT INTO tags (tag_name) VALUES (${tagName})
  `;

    console.log("Added tag");
  } catch (e) {
    console.log(e);
    console.log("Failed to add tag");
  }
  revalidatePath("/", "layout");
  redirect("/tags");
}

export async function deleteTag(tag_id: number) {
  try {
    await pool.sql`
    DELETE FROM tags where tag_id =${tag_id} RETURNING tag_name;
  `;

    console.log("Deleted tag");
  } catch (e) {
    console.log(e);
    console.log("Failed to delete tag");
  }
  revalidatePath("/", "layout");
  redirect("/tags");
}

export async function LinkTagtoNote(note: number, tag: number) {
  console.log("LinkTagtoNote", note, tag);
  try {
    await pool.sql`
    INSERT INTO note_tags (note_id, tag_id) VALUES (${note}, ${tag})
  `;

    console.log("Added tag");
  } catch (e) {
    console.log(e);
    console.log("Failed to add tag");
  }
  revalidatePath("/", "layout");
  redirect(`/tags/${tag}`);
}
