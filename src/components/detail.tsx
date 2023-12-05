export type Item = {
  id: number;
  title: string;
  createdat: string;
  description: string;
  attachment: string | null;
  attachmentalt: string | null;
  indent: number;
  sortorder: number;
  authorid: number;
};

/* eslint-disable @next/next/no-img-element */
export default function Detail({ item }: { item: Item }) {
  return (
    <div className="relative  w-full h-72">
      {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
      <img
        className="h-full w-full object-cover"
        src={item.attachment}
        alt={item.attachmentalt || "Image"}
      />
      <h1 className="text-4xl font-bold my-8 font-head capitalize absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-violet/80 rounded p-3 ">
        {item.title}
      </h1>
      <p className="text-lg ">{item.description}</p>
      {/* add button to reference link */}
    </div>
  );
}
