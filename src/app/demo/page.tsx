"use client";
import { Database } from "@/db/supabase";
import supabase from "../../db/db";
import { useEffect, useState } from "react";
import Cards from "@/components/card";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      let { data: note, error } = await supabase.from("note").select("*");

      if (error) console.log("error", error);
      else setData(note);
    };

    fetchTodos();
  }, [supabase]);

  console.log(data);
  return (
    <div>
      <Cards items={data} />
    </div>
  );
}
