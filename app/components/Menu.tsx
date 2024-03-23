"use client";

import Link from "next/link";
import { FaBars, FaInstagram, FaX } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";
import { useState } from "react";

function Menu({ page }: any) {
  const [showMenu, setShowMenu] = useState(true);

  function handleMobileMenu() {
    showMenu
      ? document
          .getElementById("modal-menu")
          ?.style.setProperty("display", "block")
      : document
          .getElementById("modal-menu")
          ?.style.setProperty("display", "none");

    setShowMenu(!showMenu);
  }

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-5">
        <div className="flex items-center">
          <button className="md:invisible" onClick={handleMobileMenu}>
            <FaBars />
          </button>

          <ul className="flex invisible  md:visible">
            <li className="p-5">
              {page == "home" ? (
                <Link href="/" className="text-gray-500">
                  home
                </Link>
              ) : (
                <Link href="/">home</Link>
              )}
            </li>
            <li className="p-5">
              {page == "galeria" ? (
                <Link href="/" className="text-gray-500">
                  galeria
                </Link>
              ) : (
                <Link href="/galeria">galeria</Link>
              )}
            </li>
            <li className="p-5">
              {page == "release" ? (
                <Link href="/" className="text-gray-500">
                  release
                </Link>
              ) : (
                <Link href="/release">release</Link>
              )}
            </li>
          </ul>
        </div>

        <SocialIcons size={25} />
      </nav>

      <nav
        className="h-lvh absolute top-0 w-40 bg-slate-900 hidden opacity-90 p-4"
        id="modal-menu"
      >
        <div className="flex justify-between items-start">
          <ul className="mt-10">
            <li className="">
              <button onClick={handleMobileMenu}>
                <Link href="/">home</Link>
              </button>
            </li>
            <li className="">
              <button onClick={handleMobileMenu}>
                <Link href="/galeria">galeria</Link>
              </button>
            </li>
            <li className="">
              <button onClick={handleMobileMenu}>
                <Link href="/release">release</Link>
              </button>
            </li>
          </ul>
          <button onClick={handleMobileMenu}>
            <FaX />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
