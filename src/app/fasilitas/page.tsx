import arrayOfFasilitas, { TArrayOfFasilitas } from "@/data/fasilitas";
import Link from "next/link";

export default function Galeri() {
  const arrayOfFasilitass : TArrayOfFasilitas[] = arrayOfFasilitas;

  return (
    <main className="p-20 h-screen overflow-y-scroll">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {arrayOfFasilitass.map((obj) => (
          <div key={obj.id} className={`card bg-center`} style={{background: `url('/img/${obj.image}')`}}>
            <span className="absolute top-3 drop-shadow-lg">{obj.name}</span>
            <Link href={`/fasilitas/${obj.id}`}>
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
