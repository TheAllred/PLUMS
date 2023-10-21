import Detail from "@/components/detail";
import items from "@/data/topics";
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Detail item={items[params.slug]} />
    </>
  );
}
