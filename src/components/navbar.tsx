"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  return pathname === `/galeri/${params?.id}` ||
    pathname === `/fasilitas/${params?.id}` ? (
    <div className="flex justify-center w-full fixed bottom-5">
      <button type="button" className="btn-active" onClick={router.back}>
        Kembali
      </button>
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
      <Link href="/kunjungan">
        <button
          type="button"
          className={`${
            pathname === "/kunjungan" ? "btn-active" : "btn-inactive"
          }`}
        >
          Kunjungan
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
      <Link href="/fasilitas">
        <button
          type="button"
          className={`${
            pathname === "/fasilitas" ? "btn-active" : "btn-inactive"
          }`}
        >
          Fasilitas
        </button>
      </Link>
    </div>
  );
}
