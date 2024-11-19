import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="flex justify-center pt-6">
          <span className="text-4xl">Museum Benteng Vredeburg</span>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <p className="drop-shadow-lg shadow-black text-center p-8 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full fixed bottom-5">
        <button
          type="button"
          className="text-white bg-[#D46C4F] hover:bg-[#D46C4F] font-medium rounded-lg text-sm me-2 w-28 h-8"
        >
          Tentang Kami
        </button>
        <button
          type="button"
          className="text-[#D46C4F] bg-white hover:bg-white font-medium rounded-lg text-sm me-2 w-28 h-8 border-2 border-[#D46C4F]"
        >
          Galeri
        </button>
      </div>
    </main>
  );
}
