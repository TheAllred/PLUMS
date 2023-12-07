"use client";
import { deleteTag } from "@/app/actions";
export default function DeleteTag({ id }) {
  function handleDelete() {
    deleteTag(id);
  }
  return <button onClick={handleDelete}>Delete</button>;
}
