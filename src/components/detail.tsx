export default function Detail(item: any) {
  return (
    <>
      <h1>{JSON.stringify(item)}</h1>
      <section><h1>{item.item.name}</h1>
      <img src={item.item.src} alt={item.item.alt} />
      </section>
    </>
  );
}
