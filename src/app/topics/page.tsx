import AddButton from "@/components/addButton";
import Cards from "@/components/card";

const products = [
  {
    id: 1,
    name: "React cheat sheet",
    link: "/0",
    imageSrc:
      "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Sheet with example code",
  },
  {
    id: 2,
    name: "Conference talk",
    link: "/1",
    imageSrc:
      "https://images.pexels.com/photos/6949978/pexels-photo-6949978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Person speaking at podium",
  },
  {
    id: 3,
    name: "Class notes",
    link: "/2",
    imageSrc: "https://picsum.photos/id/210/200/135",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Hobby list",
    link: "/3",
    imageSrc: "https://picsum.photos/id/220/200/135",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Web Development Course",
    link: "/4",
    imageSrc: "https://picsum.photos/id/237/200/135",
    imageAlt: "Web development course cover image",
  },
  {
    id: 6,
    name: "Wireless Bluetooth Headphones",
    link: "/5",
    imageSrc: "https://picsum.photos/id/238/200/135",
    imageAlt: "Wireless headphones product image",
  },
  {
    id: 7,
    name: "Gourmet Coffee Beans",
    link: "/6",
    imageSrc: "https://picsum.photos/id/239/200/135",
    imageAlt: "Bag of gourmet coffee beans",
  },
  {
    id: 8,
    name: "Yoga Mat",
    link: "/7",
    imageSrc: "https://picsum.photos/id/247/200/135",
    imageAlt: "Yoga mat product image",
  },
  {
    id: 9,
    name: "Smartphone Stand",
    link: "/8",
    imageSrc: "https://picsum.photos/id/248/200/135",
    imageAlt: "Phone stand product image",
  },
];

export default function Page() {
  return (
    <>
      <Cards items={products} />
      <a href="#">
        <AddButton />
      </a>
    </>
  );
}
