import AddButton from "@/components/addButton";
import Detail from "@/components/detail";
import pool from "@/db/vercel";
import type { Item } from "@/types/types";
import { DeleteButton, PinNoteButton } from "@/components/PinNoteButton";

export default async function Page({ params }: { params: { slug: number } }) {
  const { rows } =
    await pool.sql<Item>`SELECT * FROM notes where id =${params.slug};`;
  const { rows: relatedNotes } =
    await pool.sql<Item>`SELECT * FROM notes where parent_note =${rows[0].id};`;
  return (
    <>
      {/* <h1>{JSON.stringify(data[0])}</h1> */}
      <Detail relatedNotes={relatedNotes} item={rows[0]} />
      <AddButton />
      <DeleteButton item={rows[0]} />
      <PinNoteButton item={rows[0]} />
    </>
  );
}
