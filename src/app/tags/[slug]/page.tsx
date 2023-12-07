import AddButton from "@/components/addButton";
import pool from "@/db/vercel";
import type { Item } from "@/components/detail";
import Cards from "@/components/card";
import DeleteTag from "@/components/deleteTag";

export default async function Page({ params }: { params: { slug: number } }) {
  const { rows } = await pool.sql<Item & { tag_name: string }>`
    select n.*, t.tag_name
    from notes n 
    join note_tags nt on n.id = nt.note_id 
    join tags t on nt.tag_id = t.tag_id 
    where nt.tag_id = ${params.slug};`;
  function deleteTag() {
    pool.sql`delete from tags where tag_id = ${params.slug};`;
  }
  return (
    <>
      {rows.length > 0 ? (
        <div>
          <h1>Notes tagged as {rows[0].tag_name}:</h1>
          {/* <h1>{JSON.stringify(data[0])}</h1> */}
          <Cards items={rows} />
        </div>
      ) : (
        <div>
          <p>Tag has no items.</p>
        </div>
      )}
      <DeleteTag id={params.slug} />
    </>
  );
}
