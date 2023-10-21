import Detail from "@/components/detail";
import items from "@/data/topics";
export default function Page({ params }: { params: { slug: number } }) {
  const item = items[params.slug];
  return (
    <>
      <Detail item={item} />
    </>
  );
}
