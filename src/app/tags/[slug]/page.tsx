import AddButton from "@/components/addButton";
import pool from "@/db/vercel";
import type { Item } from "@/components/detail";
import Cards from "@/components/card";

export default async function Page({ params }: { params: { slug: number } }) {
  const { rows } =
    await pool.sql<Item>`select distinct * from notes n join note_tags nt on n.id = nt.tag_id join tags t on nt.tag_id = t.tag_id where nt.tag_id = ${params.slug};`;
  return (
    <>
      <h1>Notes tagged as {rows[0].tag_name}:</h1>
      {/* <h1>{JSON.stringify(data[0])}</h1> */}
      <Cards items={rows} />
    </>
  );
}
