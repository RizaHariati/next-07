import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["http://yoursite.com", "https://yoursite.com"]
    : ["https://www.google.com", "http://localhost:3000"];

export function middleware(request: Request) {
  const origin = request.headers.get("origin") || "http://localhost:3000";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Access-Control-Allow-Origin", origin || "*");
  requestHeaders.append("Content-Type", "application/json");
  console.log({ origin });
  // set akan overwrite the existing headers sementara append akan menambahkan ke headers yang sudah ada
  console.log({ process: process.env.NODE_ENV });
  console.log({ isItTrue: allowedOrigins.includes(origin) });
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json(null, {
      status: 400,
      statusText: "Bad Request",
      headers: requestHeaders,
    });
  }
  console.log("Middleware");

  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
