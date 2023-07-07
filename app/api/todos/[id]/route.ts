import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const BASIC_API_URL = "http://localhost:3000/api/todos/";

type Props = {
  params: { id: string };
};
export async function GET(request: Request, { params: { id } }: Props) {
  //   const id = request.url.slice(BASIC_API_URL.length);

  // kalau mau pakai params, tetap harus taruh request meskipun requestnya ga dipake.
  // kalo enggak, nanti hasilnya undefined, karena ini router, bukan page.
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const data: Todo = await res.json();
  if (!data.id) return NextResponse.json({ message: "Item not found" });
  return NextResponse.json(data);
}
