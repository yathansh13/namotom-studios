"use client";

import "./Footer.css";
import { useEffect } from "react";
import Image from "next/image";

function Footer() {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <footer class="footerb w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
        <div>
          <a
            class="logo flex-none text-l  text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            ©2023 Namotom Studios
          </a>
        </div>

        <ul class="text-center">
          {/* <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a
              class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/about"
            >
              About
            </a>
          </li>
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a
              class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/work"
            >
              Works
            </a>
          </li> */}
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
            <a
              class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="mailto:hello@namotomstudios.co.in"
              target="_blank"
            >
              hello@namotomstudios.co.in
            </a>
          </li>
        </ul>

        <div class="md:text-end space-x-2">
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.facebook.com/namotomstudios"
            target="_blank"
          >
            <Image
              src="./facebook.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-4 h-4 text-white"
              style={{ filter: "invert(100%)" }}
            />
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://twitter.com/NamotomStudios"
            target="_blank"
          >
            <Image
              src="./twitter.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-4 h-4 text-white"
              style={{ filter: "invert(100%)" }}
            />
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.youtube.com/@namotomstudios9867"
            target="_blank"
          >
            <Image
              src="./youtube.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-4 h-4 text-white"
              style={{ filter: "invert(100%)" }}
            />
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.linkedin.com/company/namotom-studios"
            target="_blank"
          >
            <Image
              src="./linkedin.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-4 h-4 text-white"
              style={{ filter: "invert(100%)" }}
            />
          </a>

          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.instagram.com/namotomstudios/"
            target="_blank"
          >
            <Image
              src="./insta.svg"
              alt="Logo"
              width={30}
              height={30}
              className="w-4 h-4 text-white"
              style={{ filter: "invert(100%)" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
