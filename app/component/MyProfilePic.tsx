import Image from "next/image";
import React from "react";

type Props = {};

const MyProfilePic = (props: Props) => {
  return (
    <section>
      <Image
        src="/Images/profilePic2.jpg"
        alt="icha hariati"
        width={200}
        height={200}
        className=" object-cover overflow-hidden rounded-full shadow-md"
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
