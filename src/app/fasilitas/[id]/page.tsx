import arrayOfFasilitas, { TArrayOfFasilitas } from "@/data/fasilitas";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const arrayOfFasilitass : TArrayOfFasilitas[] = arrayOfFasilitas;
  let id = (await params).id;

  if (Number(id) > arrayOfFasilitass.length) {
    id = String(arrayOfFasilitass.length);
  }

  const foto = arrayOfFasilitass.filter(obj => obj.id === Number(id))[0];

  return (
    <div className="relative">
      <div
        className={`h-screen brightness-50`}
        style={{backgroundImage: `url('/img/${foto.image}')`, backgroundSize: "cover"}}
      ></div>
      <div className="overlay-bg absolute top-10 w-52 left-1/2 translate-x-[-50%]">
        <h1 className="text-center m-auto p-5">{foto.name}</h1>
      </div>
      <div className="overlay-bg absolute bottom-56 left-1/2 translate-x-[-50%] w-3/4">
        <p className="text-center m-auto p-5">
          {foto.description}
        </p>
      </div>
    </div>
  );
}