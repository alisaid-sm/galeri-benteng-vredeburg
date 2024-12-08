"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();

  return pathname === `/galeri/${params?.id}` ? (
    <div className="flex justify-center w-full fixed bottom-5">
      <Link href="/galeri">
        <button
          type="button"
          className="btn-active"
        >
          Kembali
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex justify-center w-full fixed bottom-5">
      <Link href="/">
        <button
          type="button"
          className={`${pathname === "/" ? "btn-active" : "btn-inactive"}`}
        >
          Tentang Kami
        </button>
      </Link>
      <Link href="/galeri">
        <button
          type="button"
          className={`${
            pathname === "/galeri" ? "btn-active" : "btn-inactive"
          }`}
        >
          Galeri
        </button>
      </Link>
    </div>
  );
}
