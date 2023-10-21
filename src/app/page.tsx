/* eslint-disable @next/next/no-img-element */
import Search from "@/components/Search";
export const metadata = {
  title: "PLUMS",
  description:
    "A personal learning management system. | Nurturing Knowledge, Growing Success!",
};

export default function Page() {
  return (
    <>
      <div className="flex place-content-center">
        <img src="images/logoTransparent.png" alt="PLUMS" className="h-32" />
        <div>
          <h1 className="font-logo text-8xl text-center">PLUMS</h1>
          <h2 className="font-logo text-center">
            Nurturing Knowledge, Growing Success!
          </h2>
        </div>
      </div>

      <div>
        <h2 className="font-head text-4xl pt-10 pl-10">
          &#9734; Pinned Topics
        </h2>
      </div>
      <Search></Search>

    </>
  );
}
