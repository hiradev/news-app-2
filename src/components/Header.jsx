import { images } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "@/store/actions/user";

const navItemInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
];

const NavItem = ({ item }) => {
  if (item && item.href && item.type === "link") {
    return (
      <li className="relative group">
        <>
        <Link href={item.href}>
          {item.name}
        </Link>
        <span className="cursor-pointer text-green-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
          /
        </span>
        </>
      </li>
    );
  } else {
    return null;
  }
};

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
            />
          </Link>


        {/* <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          )}
        </div> */}

        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-white dark:bg-black dark:bg-opacity-70 backdrop-blur-lg bg-opacity-50 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          {/* <ul className="text-black dark:text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul> */}

          {userState.userInfo ? (
            <div className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-green-500 px-6 py-2 rounded-full text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span>Account</span>
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                  >
                    <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                      {userState?.userInfo?.admin && (
                        <Link href="/admin">
                          <button className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                            Admin Dashboard
                          </button>
                        </Link>
                      )}

                      <Link href="/profile">
                        <button className="hover-bg-dark-hard hover-text-white px-4 py-2 text-white lg-text-dark-soft">
                          Profile Page
                        </button>
                      </Link>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="hover-bg-dark-hard hover-text-white px-4 py-2 text-white lg-text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button className="mt-5 lg:mt-0 border-2 border-green-500 px-6 py-2 rounded-full txt-blue-500 font-semibold hover-bg-green-500 dark-text-white transition-all duration-300">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;