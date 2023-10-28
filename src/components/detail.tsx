/* eslint-disable @next/next/no-img-element */
export default function Detail(item: any) {
  return (
    <div className="relative overflow-hidden w-full h-72">
      <img
        className="h-full w-full object-cover"
        src={item.item.imageSrc}
        alt={item.item.alt}
      />
      <h1 className="text-4xl font-bold my-8 font-head capitalize absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-violet/80 rounded p-3 ">
        {item.item.name}
      </h1>
      <p className="text-lg">{item.item.description}</p>
    </div>
  );
}
