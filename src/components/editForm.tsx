"use client";
import { useState } from "react";
import { updateNote } from "@/app/actions";
import { Item } from "./detail";
export type UpdatedItem = {
  id: number;
  title: string;
  description: string | null;
  attachment: string | null;
  attachmentalt: string | null;
  indent: number | null;
  sortorder: number | null;
  authorid: number;
};

/* eslint-disable @next/next/no-img-element */
export default function EditForm({ item }: { item: Item }) {
  const [title, setTitle] = useState(item.title);
  const handleChangeTitle = (e: any) => {
    let updatedValue = "";
    updatedValue = e.target.value;
    setTitle(updatedValue);
  };
  const [description, setDescription] = useState(item.description);
  const handleChangeDescription = (e: any) => {
    let updatedValue = "";
    updatedValue = e.target.value;
    setDescription(updatedValue);
  };
  const [attachment, setAttachment] = useState(item.attachment);
  const handleChangeAttachment = (e: any) => {
    let updatedValue = "";
    updatedValue = e.target.value;
    setAttachment(updatedValue);
  };

  const updateNoteHandler = (event) => {
    event.preventDefault();
    updateNote({
      id: item.id,
      title: title,
      description: description,
      attachment: attachment,
    });
  }

  return (
    <>
      <div className="inset-0 flex justify-center items-start">
        <div className="w-[600px] flex flex-col">
          <h1 className="font-head bg-violet text-white text-center text-3xl p-5 rounded">
            Edit Note
          </h1>
          <form className="bg-background p-5 rounded" onSubmit={updateNoteHandler}>
            <label htmlFor="title" className="font-head font-bold">
              TITLE:
            </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="border mb-5"
              onChange={(e: any) => {
                handleChangeTitle(e);
              }}
              value={title}
            />
            <br />

            <label htmlFor="description" className="font-head font-bold">
              DESCRIPTION OF TOPIC:
            </label>
            <br />
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="border mb-5"
              onChange={(e: any) => {
                handleChangeDescription(e);
              }}
              value={description}
            ></textarea>
            <br />

            <label htmlFor="attachment" className="font-head font-bold">
              COVER IMAGE:
            </label>
            <br />
            <input
              type="url"
              name="attachment"
              id="attachment"
              className="border mb-5"
              onChange={(e: any) => {
                handleChangeAttachment(e);
              }}
              value={attachment ? attachment : ""}
            />
            <br />

            <label htmlFor="reference" className="font-head font-bold">
              REFERENCE LINK:
            </label>
            <br />
            <p className="font-body italic text-xs">
              (Website, Image, Video, etc.)
            </p>
            <input
              type="url"
              name="reference"
              id="reference"
              className="border mb-5"
            />
            <br />

            <label htmlFor="notes" className="font-head font-bold">
              NOTES FOR REFERENCE:
            </label>
            <br />
            <textarea
              name="notes"
              id="notes"
              cols={30}
              rows={10}
              className="border mb-5"
            ></textarea>
            <br />
            <label htmlFor="tags" className="font-head font-bold">
              TAGS:
            </label>
            <br />
            <input type="text" name="tags" id="tags" className="border" />
            <p className="font-body italic text-xs">
              (Separate tags with commas)
            </p>
            <br />
            <button
              type="submit"
              className="font-head bg-green hover:bg-darkGreen text-white p-4"
            >
              Edit Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
