import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-stone-300 h-16 w-full p-5 px-24  flex items-center justify-between text-center shadow-md shadow-slate-400">
      <h2>IchaCodes</h2>
      <div className="flex gap-3 text-2xl text-white">
        <Link href="/" className=" hover:text-stone-600 transition-all">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="/" className=" hover:text-stone-600 transition-all">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="/" className=" hover:text-stone-600 transition-all">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
