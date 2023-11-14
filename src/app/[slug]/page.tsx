"use client";
import supabase from "../../db/db";
import { useEffect, useState } from "react";
import AddButton from "@/components/addButton";
import Detail from "@/components/detail";
export default function Page({ params }: { params: { slug: number } }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchNoteById = async () => {
      let { data: note, error } = await supabase
        .from("note")
        .select("*")
        .where("id", params.slug)
        .limit(1);

      if (error) console.log("error", error);
      else setData(note);
    };

    fetchNoteById();
  }, [supabase]);

  return (
    <>
      <Detail item={data[0]} />
      <AddButton />
    </>
  );
}
