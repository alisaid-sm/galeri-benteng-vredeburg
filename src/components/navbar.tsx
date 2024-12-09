"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const active = "text-white bg-[#D46C4F] hover:bg-[#D46C4F] font-medium rounded-lg text-sm me-2 w-28 h-8";
  const inactive = "text-[#D46C4F] bg-white hover:bg-white font-medium rounded-lg text-sm me-2 w-28 h-8 border-2 border-[#D46C4F]";

  return (
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
          className={`${pathname === "/galeri" ? "btn-active" : "btn-inactive"}`}
        >
          Galeri
        </button>
      </Link>
    </div>
  );
}
