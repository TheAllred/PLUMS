import { DocumentMinusIcon } from "@heroicons/react/20/solid";
import { deleteNote } from "@/app/actions";
export default function DeleteButton(id: number) {
  return (
    <button
      className="bg-green hover:bg-darkGreen rounded-full p-4 fixed bottom-0 right-0 mr-8 mb-8 text-white"
      onClick={deleteNote(id)}
    >
      <DocumentMinusIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
