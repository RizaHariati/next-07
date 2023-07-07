//https://<your-site.com>/api/revalidate?secret=<token>
// const URL_PATH = "http://localhost:3000/api/revalidate?path=/&secret=SECRET";

import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const path = (req.query.path as string) || "/";

  await res.revalidate("/");
  return res.json({ revalidated: true });

  // IMPORTANT NOTE!!!!!!! KALO PAKE MIDDLEWARE, ADA KEMUNGKINAN ERROR
  //   try {
  //     const path = req.query.path as string;
  //     console.log({ path });
  //     await res.revalidate(path);
  //     return res.json({ revalidated: true });
  //   } catch (error) {
  //     return res.status(500).send("Error revalidating");
  //   }
}
