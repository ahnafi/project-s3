interface Penugasan {
  nomor?: string;
  img: string;
  title: string;
  tugas?: string[];
}

const snbpSnbt: Penugasan[] = [
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "1",
    tugas: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi suscipit officia sunt repellat, consequatur et quisquam. Culpa voluptatum sit dolore cum tempora accusantium! Nesciunt quo dolorem consectetur ex corporis?", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "2",
    tugas: ["lorem", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "3",
    tugas: ["lorem", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "4",
    tugas: ["lorem", "ipsum", "dolor"],
  },
];

const mandiri: Penugasan[] = [
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "1",
    tugas: ["lorem", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "1",
    tugas: ["lorem", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "1",
    tugas: ["lorem", "ipsum", "dolor"],
  },
  {
    img: "/images/cartoon/1.jpg",
    title: "Telur",
    nomor: "1",
    tugas: ["lorem", "ipsum", "dolor"],
  },
];

export { type Penugasan, mandiri, snbpSnbt };
