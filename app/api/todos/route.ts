import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// export async function GET() {
//   const res = await fetch(DATA_SOURCE_URL);
//   const data = await res;
//   return data;
// }

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) {
    return NextResponse.json({ message: "Todo id Required" });
  }
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("API-Key", process.env.DATA_API_KEY! as string);

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: myHeaders,
    // headers: {
    //   append: '("Content-Type", "application/json")',
    // },
  });

  return NextResponse.json({ message: `item number ${id} is deleted` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title) {
    return NextResponse.json({ message: "request data is not complete" });
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("API-Key", process.env.DATA_API_KEY! as string);

  const response = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo = await response.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { id, userId, title, completed }: Partial<Todo> = await request.json();

  if (!id || !userId || !title || typeof completed !== "boolean") {
    return NextResponse.json({ message: "missing required data" });
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("API-Key", process.env.DATA_API_KEY! as string);

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id,
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo = await response.json();

  return NextResponse.json(updatedTodo);
}
