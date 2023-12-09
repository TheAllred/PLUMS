import NoteSelect from "@/components/parentSelect";
import { LinkTagtoNote } from "@/app/actions";
export default function TagNote({ tag_id }: { tag_id: number }) {
  async function handleSubmit(formData: FormData) {
    "use server";
    // @ts-ignore
    await LinkTagtoNote(formData.get("parent"), tag_id);
  }
  return (
    <form action={handleSubmit} className="mb-6">
      <NoteSelect></NoteSelect>
      <br />
      <button
        type="submit"
        className="bg-green hover:bg-darkGreen text-white font-bold py-2 px-4 rounded"
      >
        Add Note to Tag
      </button>
    </form>
  );
}
