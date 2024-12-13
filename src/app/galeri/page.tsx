import Link from "next/link";

export default function Galeri() {
  const arrayOfFoto = [
    {
      id: 1,
      name: "Foto 1",
      image: "1.jpg",
    },
    {
      id: 2,
      name: "Foto 2",
      image: "2.jpg",
    },
    {
      id: 3,
      name: "Foto 3",
      image: "3.jpg",
    },
    {
      id: 4,
      name: "Foto 4",
      image: "4.jpg",
    },
    {
      id: 5,
      name: "Foto 5",
      image: "5.png",
    },
    {
      id: 6,
      name: "Foto 6",
      image: "6.jpg",
    },
    {
      id: 7,
      name: "Foto 7",
      image: "7.png",
    },
    {
      id: 8,
      name: "Foto 8",
      image: "8.png",
    },
    {
      id: 9,
      name: "Foto 9",
      image: "9.png",
    },
    {
      id: 10,
      name: "Foto 10",
      image: "10.png",
    },
    {
      id: 11,
      name: "Foto 11",
      image: "11.png",
    },
    {
      id: 12,
      name: "Foto 12",
      image: "12.png",
    },
    {
      id: 13,
      name: "Foto 13",
      image: "13.png",
    },
    {
      id: 14,
      name: "Foto 14",
      image: "14.png",
    },
    {
      id: 15,
      name: "Foto 15",
      image: "15.png",
    },
    {
      id: 16,
      name: "Foto 16",
      image: "16.jpg",
    },
    {
      id: 17,
      name: "Foto 17",
      image: "17.jpg",
    },
    {
      id: 18,
      name: "Foto 18",
      image: "18.jpg",
    },
    {
      id: 19,
      name: "Foto 19",
      image: "19.jpg",
    },
    {
      id: 20,
      name: "Foto 20",
      image: "20.jpg",
    },
  ];

  return (
    <main className="p-20">
      <div className="grid grid-cols-4 gap-5">
        {arrayOfFoto.map((obj) => (
          <div key={obj.id} className={`card bg-[url('/img/${obj.image}')] bg-center`}>
            <span className="absolute top-3">{obj.name}</span>
            <Link href={`/galeri/${obj.image}`}>
              <button
                type="button"
                className="btn-2-active absolute bottom-3 left-1/2 translate-x-[-50%]"
              >
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
