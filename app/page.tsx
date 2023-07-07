import Image from "next/image";
import MyProfilePic from "./component/MyProfilePic";
import Post from "./component/Post";

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
