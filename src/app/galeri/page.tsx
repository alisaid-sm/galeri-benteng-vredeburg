import arrayOfFoto, { TArrayOfFoto } from "@/data/foto";
import Link from "next/link";

export default function Galeri() {
  const arrayOfFotos : TArrayOfFoto[] = arrayOfFoto;

  return (
    <main className="p-20">
      <div className="grid grid-cols-4 gap-5">
        {arrayOfFotos.map((obj) => (
          <div key={obj.id} className={`card bg-center`} style={{background: `url('/img/${obj.image}')`}}>
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
