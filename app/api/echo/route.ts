import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  //   const data = await res.json();
  // const data = { message: "Hellow, this is Echo's message" };
  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries());
  // const name = searchParams.get("name");
  // const school = searchParams.get("school");
  // kalau pakai object, semua yang ada otomatis dikembaliin.
  // kalau pakai searchParams.get hanya yang ditentukan terlebih dahulu dibalikin tapi ga error
  return NextResponse.json(obj);
}
