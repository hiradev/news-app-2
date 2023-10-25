import { images } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ArticleDetailPage from "@/pages/articleDetail/ArticleDetailPage";

const navItemInfo = [
  { name: "Home" , type: "link"}, 
  { name: "Articles" , type: "link"}
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <Link href={"/"} className="px-4 py-2">
        {name}
      </Link>
      <span className="curser-pointer text-green-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <Image
            src="/vercel.svg"
            alt="Logo"
            className="dark:invert"
            width={100}
            height={24}
          />
        </div>

        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-white dark:bg-black dark:bg-opacity-70 backdrop-blur-lg bg-opacity-50 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center` }
        >
          <ul className="text-black dark:text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-green-500 px-6 py-2 rounded-full txt-blue-500 font-semibold hover:bg-green-500 dark:text-white transition-all duration-300">
            <Link href='/login'>Sign In</Link>
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
