import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const BASIC_API_URL = "http://localhost:3000/api/todos/";
export async function GET(request: Request) {
  const id = request.url.slice(BASIC_API_URL.length);
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const data: Todo = await res.json();
  if (!data.id) return NextResponse.json({ message: "Item not found" });
  return NextResponse.json(data);
}
