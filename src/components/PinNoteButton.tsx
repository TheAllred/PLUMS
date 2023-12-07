"use client";
import { deleteNote } from "@/app/actions";
import { pinNote } from "@/app/actions";
import { DocumentMinusIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Item } from "@/types/types";

export function PinNoteButton({ item }: { item: Item }) {
  return (
    <button
      className="bg-yellow-400 hover:bg-yellow-600 rounded-full p-4 fixed bottom-0 right-32 mr-8 mb-8 text-white"
      onClick={() => {
        pinNote(item.id, item.pinned);
      }}
    >
      <BookmarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
export function DeleteButton({ item }: { item: Item }) {
  return (
    <button
      className="bg-red hover:bg-darkRed rounded-full p-4 fixed bottom-0 mr-8 mb-8 text-white"
      onClick={() => {
        deleteNote(item.id);
      }}
    >
      <DocumentMinusIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
