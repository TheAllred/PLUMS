"use client";
import { useEffect, useState } from "react";
import Cards from "@/components/card";
import { sql } from "@vercel/postgres";

const likes = 100;

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      // let { data: note, error } = await supabase.from("note").select("*");
      // if (error) console.log("error", error);
      // else setData(note);
      const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
    };
  });

  return (
    <div>
      <Cards items={data} />
    </div>
  );
}


