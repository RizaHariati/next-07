import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import ListItem from "./ListItem";

type Props = {};

const Post = (props: Props) => {
  const posts = getSortedPostsData();
  return (
    <div className=" text-stone-600">
      <h1>My Posts</h1>
      <div>
        <ul>
          {posts.map((post) => {
            return <ListItem post={post} key={post.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Post;
