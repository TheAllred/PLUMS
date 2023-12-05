import AddButton from "@/components/addButton";
import Detail from "@/components/detail";
import pool from "@/db/vercel";
import type { Item } from "@/components/detail";
import DeleteButton from "@/components/deleteButton";

export default async function Page({ params }: { params: { slug: number } }) {
  const { rows } =
    await pool.sql<Item>`SELECT * FROM notes where id =${params.slug};`;
  return (
    <>
      {/* <h1>{JSON.stringify(data[0])}</h1> */}
      <Detail item={rows[0]} />
      <AddButton/>

    </>
  );
}
