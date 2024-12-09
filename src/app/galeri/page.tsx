import Link from "next/link";

export default function Galeri() {
  return (
    <main className="p-20">
      <div className="grid grid-cols-4 gap-5">
        <div className="card bg-[url('/img/mainbg.svg')] bg-center">
          <span className="absolute top-3">Foto 1</span>
          <Link href="/galeri/1">
            <button
              type="button"
              className="btn-2-active absolute bottom-3 left-1/2 translate-x-[-50%]"
            >
              Detail
            </button>
          </Link>
        </div>
        <div className="card bg-[url('/img/mainbg.svg')] bg-center">
          <span className="absolute top-3">Foto 2</span>
          <Link href="/galeri/2">
            <button
              type="button"
              className="btn-2-active absolute bottom-3 left-1/2 translate-x-[-50%]"
            >
              Detail
            </button>
          </Link>
        </div>
        <div className="card bg-[url('/img/mainbg.svg')] bg-center">
          <span className="absolute top-3">Foto 3</span>
          <Link href="/galeri/3">
            <button
              type="button"
              className="btn-2-active absolute bottom-3 left-1/2 translate-x-[-50%]"
            >
              Detail
            </button>
          </Link>
        </div>
        <div className="card bg-[url('/img/mainbg.svg')] bg-center">
          <span className="absolute top-3">Foto 4</span>
          <Link href="/galeri/4">
            <button
              type="button"
              className="btn-2-active absolute bottom-3 left-1/2 translate-x-[-50%]"
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
