import Cards from "@/components/card";

const products = [
  {
    id: 1,
    name: "React Cheat Sheet",
    price: "",
    description:
      "A comprehensive React cheat sheet covering the core concepts and best practices.",
    imageSrc:
      "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Sheet with example code",
  },
  {
    id: 2,
    name: "Python Programming Fundamentals",
    price: "",
    description:
      "Learn the fundamentals of Python programming, from basic syntax to advanced data structures.",
    imageSrc: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Python code example",
  },
  {
    id: 3,
    name: "Web Development with JavaScript",
    price: "",
    description:
      "Master web development using JavaScript, including modern frameworks like React and Vue.js.",
    imageSrc: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Web development with JavaScript",
  },
  {
    id: 4,
    name: "Data Science and Machine Learning",
    price: "",
    description:
      "Dive into the world of data science and machine learning with this comprehensive course.",
    imageSrc: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Data science and machine learning",
  },
  {
    id: 5,
    name: "Digital Marketing Strategies",
    price: "",
    description:
      "Explore effective digital marketing strategies to promote your business online.",
    imageSrc: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Digital marketing strategies",
  },
];

export default function Page() {
  return <Cards items={products} />;
}
