"use client";
import { useEffect, useState } from "react";
import AddButton from "@/components/addButton";
import Detail from "@/components/detail";
export default function Page({ params }: { params: { slug: number } }) {
  const [data, setData] = useState([]);
  useEffect(() => {
   
  

  });

  return (
    <>
      <Detail item={data[0]} />
      <AddButton />
    </>
  );
}
