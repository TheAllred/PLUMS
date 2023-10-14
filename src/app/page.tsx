/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "PLUMS",
  description:
    "A personal learning management system. | Nurturing Knowledge, Growing Success!",
};

export default function Page() {
  return (
    <div className="flex place-content-center">
      <img
        className="h-32"
        src="https://i.ibb.co/WyhyrDN/logo-Transparent.png"
        alt="PLUMS"
      />
      <div>
        <h1 className="font-head text-8xl text-center">PLUMS</h1>
        <h2 className="font-head text-center">
          Nurturing Knowledge, Growing Success!
        </h2>
      </div>
    </div>
  );
}
