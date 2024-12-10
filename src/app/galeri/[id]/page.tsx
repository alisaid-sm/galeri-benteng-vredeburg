export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div className="h-screen bg-[url('/img/mainbg.svg')] bg-center bg-cover">My Post: {id}</div>;
}
