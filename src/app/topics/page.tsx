import Cards from "@/components/card";
import pool from "@/db/vercel";
import { Item } from "@/components/detail";

import AddButton from "@/components/addButton";
import ModalForm from "@/components/modalForm";

export default async function Page() {
  const { rows } = await pool.sql<Item>`SELECT * FROM notes;`;
  return (
    <>
      <Cards items={rows} />
      <AddButton />
      {/* <ModalForm /> */}
    </>
  );
}
