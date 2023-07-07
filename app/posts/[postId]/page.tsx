import { getPostData, getSortedPostsData } from "@/lib/posts";
import React from "react";
import { notFound } from "next/navigation";
type Params = {
  params: { postId: string };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params: { postId } }: Params) {
  const posts = getSortedPostsData();

  const findPost = posts.find((post) => post.id === postId);

  if (!findPost) {
    return notFound();
  }
  return {
    title: findPost.title,
    description: findPost.date,
  };
}
const page = async ({ params: { postId } }: Params) => {
  const posts = getSortedPostsData();

  const findPost = posts.find((post) => post.id === postId);
  const posting = await getPostData(postId);

  if (!findPost) {
    return notFound();
  }
  return (
    <div className="h-full min-h-screen text-stone-800 p-10 max-w-4xl">
      <h1>{findPost.title}</h1>
      <small className="text-stone-600">published :{findPost.date}</small>
      <article>
        <section dangerouslySetInnerHTML={{ __html: posting.contentHtml }} />
      </article>
    </div>
  );
};

export default page;
