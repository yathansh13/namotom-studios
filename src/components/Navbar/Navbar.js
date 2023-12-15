"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "./Navbar.css";

const Image = dynamic(() => import("next/image"), { ssr: false });

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navb flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 transition-all duration-500 ease-in-out sm:fixed sm:top-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="logo inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
            href="/"
          >
            <Image
              className="mx-5"
              src="./logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            Namotom Studios
          </a>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`mt-5 sm:mt-0 ${
            isOpen ? "block" : "hidden"
          } sm:flex transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="logo2 font-medium text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
            >
              Home
            </a>
            <a
              className="logo2 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/about"
            >
              About us
            </a>
            <a
              className="logo2 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/work"
            >
              Our Work
            </a>
            {/* <a
              className="logo2 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="mailto:hello@namotomstudios.co.in"
              target="_blank"
            >
              Contact us
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
