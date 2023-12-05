"use client";
import React, { useState } from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { createNote } from "@/app/actions";

export type NewItem = {
  title: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  indent: number | null;
  sortorder: number | null;
  authorid: number;
};

const initialState = {
  title: "",
  reference: "",
  description: "",
  tags: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-violet text-white p-2 rounded"
    >
      Create New Note
    </button>
  );
}

export default function ModalForm() {
  const [state, formAction] = useFormState(createNote, initialState);

  return (
    <>
      <div className="inset-0 flex justify-center items-start">
        <div className="w-[600px] flex flex-col">
          <h1 className="font-head bg-violet text-white text-center text-3xl p-5 rounded">
            Create New Item
          </h1>
          <form action={formAction} className="bg-background p-5 rounded">
            <label htmlFor="title" className="font-head font-bold">
              TITLE:
            </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="border mb-5"
            />
            <br />

            <label htmlFor="description" className="font-head font-bold">
              DESCRIPTION:
            </label>
            <br />
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="border mb-5"
            ></textarea>
            <br />

            <label htmlFor="reference" className="font-head font-bold">
              REFERENCE LINK:
            </label>
            <br />
            <input
              type="url"
              name="reference"
              id="reference"
              className="border mb-5"
            />
            <br />

            <p className="font-head font-bold">FILE UPLOAD:</p>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-5"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Multiple files may be selected at a time
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*, .pdf,  video/*, .doc"
                />
              </label>
            </div>

            <label htmlFor="tags" className="font-head font-bold">
              TAGS:
            </label>
            <br />
            <input type="text" name="tags" id="tags" className="border" />
            <p className="font-body italic text-xs">
              (Separate tags with commas)
            </p>
            <br />

            <SubmitButton></SubmitButton>
          </form>
        </div>
      </div>
    </>
  );
}
