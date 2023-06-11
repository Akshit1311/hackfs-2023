export default function Page({ params }: { params: { pickId: string } }) {
  return <h1>{params.pickId}</h1>;
}
