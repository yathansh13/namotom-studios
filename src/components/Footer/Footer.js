"use client";

import "./Footer.css";
import { useEffect, useState } from "react";
import Image from "next/image";

function Footer() {
  useEffect(() => {
    require("preline");
  }, []);
  return (
    // <footer class="footerb w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto">
    //   <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
    //     <div>
    //       <a
    //         class="logo flex-none text-l  text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="#"
    //         aria-label="Brand"
    //       >
    //         ©2023 Namotom Studios
    //       </a>
    //     </div>

    //     <ul class="text-center">
    //       {/* <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
    //         <a
    //           class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //           href="/about"
    //         >
    //           About
    //         </a>
    //       </li>
    //       <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
    //         <a
    //           class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //           href="/work"
    //         >
    //           Works
    //         </a>
    //       </li> */}
    //       <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
    //         <a
    //           class="logo inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //           href="mailto:hello@namotomstudios.co.in"
    //           target="_blank"
    //         >
    //           hello@namotomstudios.co.in
    //         </a>
    //       </li>
    //     </ul>

    //     <div class="md:text-end space-x-2">
    //       <a
    //         class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="https://www.facebook.com/namotomstudios"
    //         target="_blank"
    //       >
    //         <Image
    //           src="./facebook.svg"
    //           alt="Logo"
    //           width={30}
    //           height={30}
    //           className="w-4 h-4 text-white"
    //           style={{ filter: "invert(100%)" }}
    //         />
    //       </a>
    //       <a
    //         class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="https://twitter.com/NamotomStudios"
    //         target="_blank"
    //       >
    //         <Image
    //           src="./twitter.svg"
    //           alt="Logo"
    //           width={30}
    //           height={30}
    //           className="w-4 h-4 text-white"
    //           style={{ filter: "invert(100%)" }}
    //         />
    //       </a>
    //       <a
    //         class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="https://www.youtube.com/@namotomstudios9867"
    //         target="_blank"
    //       >
    //         <Image
    //           src="./youtube.svg"
    //           alt="Logo"
    //           width={30}
    //           height={30}
    //           className="w-4 h-4 text-white"
    //           style={{ filter: "invert(100%)" }}
    //         />
    //       </a>
    //       <a
    //         class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="https://www.linkedin.com/company/namotom-studios"
    //         target="_blank"
    //       >
    //         <Image
    //           src="./linkedin.svg"
    //           alt="Logo"
    //           width={30}
    //           height={30}
    //           className="w-4 h-4 text-white"
    //           style={{ filter: "invert(100%)" }}
    //         />
    //       </a>

    //       <a
    //         class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //         href="https://www.instagram.com/namotomstudios/"
    //         target="_blank"
    //       >
    //         <Image
    //           src="./insta.svg"
    //           alt="Logo"
    //           width={30}
    //           height={30}
    //           className="w-4 h-4 text-white"
    //           style={{ filter: "invert(100%)" }}
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <div className="footerbg">
      <footer class="footerb relative bg-blueGray-200 pt-8 pb-6">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="flex flex-col items-center w-full lg:w-6/12 px-4">
              <Image
                className="mx-5"
                src="./logo.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <h4 class="logo text-3xl fonat-semibold text-blueGray-700">
                Namotom Studios
              </h4>

              <div class="mt-6 lg:mb-0 mb-6">
                <a
                  class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="https://www.facebook.com/namotomstudios"
                  target="_blank"
                >
                  <Image
                    src="./facebook.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="w-4 h-4 text-white"
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
                    width={40}
                    height={40}
                    className="w-4 h-4 text-white"
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
                    width={40}
                    height={40}
                    className="w-4 h-4 text-white"
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
                    width={40}
                    height={40}
                    className="w-4 h-4 text-white"
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
                    width={40}
                    height={40}
                    className="w-4 h-4 text-white"
                  />
                </a>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="links-head block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Information
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="#"
                      >
                        Legal
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="links-head block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Company
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/service"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/work"
                      >
                        Work With Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/partner"
                      >
                        Partner With Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <span class="links-head block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Contact us
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="links-body text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="mailto:hello@namotomstudios.co.in"
                      >
                        hello@namotomstudios.co.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center  justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 mt-4 font-semibold py-1">
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="links-body text-blueGray-500 hover:text-gray-500"
                  target="_blank"
                >
                  ©2023 Namotom Studios
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
