"use client";
import { deleteNote } from "@/app/actions";
import { DocumentMinusIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { pinNote } from "@/app/actions";
import Tags from "@/components/tags";
export type Item = {
  id: number;
  title: string;
  createdat: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  indent: number;
  sortorder: number;
  authorid: number;
  pinned: boolean;
};

/* eslint-disable @next/next/no-img-element */
export default function Detail({ item }: { item: Item }) {
  async function DeleteButton() {
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
  return (
    <>
      <div className="relative  w-full h-72">
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
        <img
          className="h-full w-full object-cover"
          src={item.attachment}
          alt={item.attachmentalt || "Image"}
        />
        <h1 className="text-4xl font-bold my-8 font-head capitalize absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-violet/80 rounded p-3 ">
          {item.title}
          {item.pinned && " ⭐︎"}
        </h1>
        <p className="text-lg ">{item.description}</p>
        <Tags id={item.id}></Tags>
      </div>
      <DeleteButton></DeleteButton>
      <a
        className="bg-blue hover:bg-darkBlue rounded-full p-4 fixed bottom-0 right-16 mr-8 mb-8 text-white"
        href={`/edit/${item.id}`}
      >
        <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
      </a>
      <button
        className="bg-yellow-400 hover:bg-yellow-600 rounded-full p-4 fixed bottom-0 right-32 mr-8 mb-8 text-white"
        onClick={() => {
          pinNote(item.id, item.pinned);
        }}
      >
        <BookmarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
}
