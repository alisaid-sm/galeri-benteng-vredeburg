export default function Galeri() {
  const card =
    "bg-white text-white flex justify-center items-center rounded-md h-52";

  return (
    <main className="p-20">
      <div className="grid grid-cols-3 gap-5">
        <div className={`${card} bg-[url('/img/mainbg.svg')] bg-center`}>Diorama 1</div>
        <div className={`${card} bg-[url('/img/mainbg.svg')] bg-center`}>Diorama 2</div>
        <div className={`${card} bg-[url('/img/mainbg.svg')] bg-center`}>Diorama 3</div>
      </div>
    </main>
  );
}
