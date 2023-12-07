"use client";
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

export default function ModalForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const newNewItem: NewItem = {
      title: event.target.title.value,
      description: event.target.description.value,
      attachment: event.target.attachment.value,
      attachmentalt: null,
      indent: null,
      sortorder: null,
      authorid: 1,
    };
    createNote(newNewItem);
  }

  return (
    <>
      <div className="inset-0 flex justify-center items-start">
        <div className="w-[600px] flex flex-col">
          <h1 className="font-head bg-violet text-white text-center text-3xl p-5 rounded">
            Create New Note
          </h1>
          <form className="bg-background p-5 rounded" onSubmit={handleSubmit}>
            <label htmlFor="title" className="font-head font-bold">
              TITLE:
            </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              className="border mb-5 font-body"
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
              className="border mb-5 font-body"
            ></textarea>
            <br />

            <label htmlFor="attachment" className="font-head font-bold">
              COVER IMAGE URL:
            </label>
            <br />
            <input
              type="url"
              name="attachment"
              id="attachment"
              className="border mb-5 font-body"
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
              className="border mb-5 font-body"
            />
            <br />

            {/* <p className="font-head font-bold">FILE UPLOAD:</p>
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
            </div> */}

            <label htmlFor="tags" className="font-head font-bold">
              TAGS:
            </label>
            <br />
            <input
              type="text"
              name="tags"
              id="tags"
              className="border font-body"
            />
            <p className="font-body italic text-xs">
              (Separate tags with commas)
            </p>
            <br />
            <button
              type="submit"
              className="font-head bg-green hover:bg-darkGreen text-white p-4 rounded-3xl font-bold"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
