import Image from "next/image";
import MyProfilePic from "./component/MyProfilePic";
import Post from "./component/Post";

// export const revalidate = 10;
// revalidate dalam second jadi kalau mau direvalidate per hari jadi 86400
// kalau tidak ada permintaan, mungkin harus beberapa kali di klik sebelum data di refresh

// Kalo mo bikin instant keyword atau random token bisa bikin di nodejs. masuk ke node di terminal terus ketik:
// require('crypto').randomBytes(16).toString('hex') atau manipulasi yg lain

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <main className="flex min-h-screen flex-col justify-start p-10 text-center items-center">
        <MyProfilePic />
        <h1>Hi! I&lsquo;m Icha &#128075; Welcome!</h1>
        <Post />
      </main>
    </main>
  );
}
