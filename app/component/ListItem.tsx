import { getFormattedDate } from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type Props = {
  post: BlogPost;
};

const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="">
      <Link href={`/posts/${id}`}>
        <h2 className="hover:underline">{title}</h2>
      </Link>
      <p>{formattedDate}</p>
    </li>
  );
};

export default ListItem;
