export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="relative">
      <div
        className={`h-screen bg-[url('/img/${id}')] bg-center bg-cover brightness-50`}
      ></div>
      <div className="overlay-bg absolute top-10 w-52 left-1/2 translate-x-[-50%]">
        <h1 className="text-center m-auto p-5">My Post: {id}</h1>
      </div>
      <div className="overlay-bg absolute bottom-56 left-1/2 translate-x-[-50%] w-3/4">
        <p className="text-center m-auto p-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
