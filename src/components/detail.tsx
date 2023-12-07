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
        <a href={`/note/${item.parent_note}`}>
          <BackwardIcon className="h-6 w-6" aria-hidden="true"></BackwardIcon>
        </a>
      )}
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
        <p className="text-lg font-body">{item.description}</p>
        <a href={item.reference}>Reference</a>
        <Tags id={item.id}></Tags>
      </div>

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
