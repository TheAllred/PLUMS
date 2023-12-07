"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteTag } from "@/app/actions";
export default function DeleteTag({ id }) {
  function handleDelete() {
    deleteTag(id);
  }
  return (
    <button
      onClick={handleDelete}
      className=" bg-darkRed hover:bg-red-700 rounded-full p-2 z-10"
    >
      <TrashIcon className="h-6 w-6" aria-hidden="true"></TrashIcon>
    </button>
  );
}
