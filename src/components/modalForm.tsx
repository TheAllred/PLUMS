import { createNote } from "@/app/actions";
import NoteSelect from "./parentSelect";

export type NewItem = {
  title: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  parentNote: number | null;
  authorid: number;
};

export default function ModalForm() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const newNewItem: NewItem = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      attachment: formData.get("attachment") as string,
      attachmentalt: null,
      parentNote: Number(formData.get("parent")),
      authorid: 1,
    };
    createNote(newNewItem);
  }

  return (
    <>
      <div className="inset-0 flex justify-center items-start">
        <div className="w-[600px] flex flex-col">
          <h1 className="font-head bg-violet text-white text-center text-3xl p-5 rounded">
            Create New Item
          </h1>
          <form className="bg-background p-5 rounded" action={handleSubmit}>
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
              DESCRIPTION OF TOPIC:
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

            <label htmlFor="attachment" className="font-head font-bold">
              COVER IMAGE:
            </label>
            <br />
            <input
              type="url"
              name="attachment"
              id="attachment"
              className="border mb-5"
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
            <label htmlFor="parent" className="font-head font-bold">
              Parent Note
            </label>
            <br />
            <NoteSelect></NoteSelect>
            <br />

            <button
              type="submit"
              className="font-head bg-green hover:bg-darkGreen text-white p-4"
            >
              Create Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
