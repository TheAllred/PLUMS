"use client";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { BackwardIcon } from "@heroicons/react/24/outline";
import Tags from "@/components/tags";
import Cards from "./card";
import { Item } from "@/types/types";

/* eslint-disable @next/next/no-img-element */
export default function Detail({
  item,
  relatedNotes,
}: {
  item: Item;
  relatedNotes: Item[];
}) {
  return (
    <>
      {item.parent_note && (
        <a
          href={`/note/${item.parent_note}`}
          className="
        font-body text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2 mb-4
        "
        >
          <BackwardIcon className="h-6 w-6"></BackwardIcon> Return to Parent
        </a>
      )}
      <div className="relative  w-full h-72">
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
        {item.attachment && (
          <img
            className="h-full w-full object-cover"
            src={item.attachment}
            alt={item.attachmentalt || "Image"}
          />
        )}

        <h1 className="text-4xl font-bold my-8 font-head capitalize absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-violet/80 rounded p-3 ">
          {item.title}
          {item.pinned && " ⭐︎"}
        </h1>
      </div>
      <p className="text-lg font-body">{item.description}</p>
      {item.referencelink && (
        <a
          href={item.referencelink}
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Linked Attachment
        </a>
      )}
      <Tags id={item.id}></Tags>
      <Cards items={relatedNotes} />
      <a
        className="bg-blue hover:bg-darkBlue rounded-full p-4 fixed bottom-0 right-16 mr-8 mb-8 text-white"
        href={`/edit/${item.id}`}
      >
        <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </>
  );
}
