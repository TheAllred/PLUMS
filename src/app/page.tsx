/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "PLUMS",
  description:
    "A personal learning management system. | Nurturing Knowledge, Growing Success!",
};

export default function Page() {
  return (
    <>
      <div className="flex place-content-center">
        <img
          className="h-32"
          src="https://imageupload.io/6qkITxruv1dwWU1"
          alt="PLUMS"
        />
        <div>
          <h1 className="font-head text-8xl text-center">PLUMS</h1>
          <h2 className="font-head text-center">
            Nurturing Knowledge, Growing Success!
          </h2>
        </div>
      </div>

      <div>
        <h2 className="font-head text-3xl pt-10 pl-10">Pinned Topics</h2>
      </div>
    </>
  );
}
