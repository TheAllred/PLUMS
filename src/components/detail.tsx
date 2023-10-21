export default function Detail(item: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-8">{item.item.name}</h1>
      <img className="w-1/2 mb-8" src={item.item.imageSrc} alt={item.item.alt} />
      <p className="text-lg">{item.item.description}</p>
    </div>
  );
}

