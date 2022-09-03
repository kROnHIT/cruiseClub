import React, { useState, useEffect, useCallback } from "react";
import {
  CalendarIcon,
  WalletIcon,
  UserIcon,
  CurrencyRupeeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiFillCloseCircle } from "react-icons/ai";
import Overview from "./overview";

function App() {
  const [top, setTop] = useState(true);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <div className="App">
      <header
        className={`fixed w-full z-30 bg-opacity-90 transition duration-300 ease-in-out 
        ${!top && "bg-white backdrop-blur-sm shadow-lg"}
      `}
      >
        <nav className="w-full">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="#" className="flex items-center">
                  <img
                    src={require("../assets/image/logo2.png")}
                    className="h-6 mr-3 sm:h-9"
                    alt="Landwind Logo"
                  />
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 lg:p-0"
                      aria-current="page"
                    >
                      Our Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400 dark:border-gray-700"
                    >
                      Find Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400 dark:border-gray-700"
                    >
                      Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400 dark:border-gray-700"
                    >
                      Tour Packages
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400 dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <a
                    href="#"
                    className="text-white bg-sky-500 font-medium text-sm px-4 py-3"
                  >
                    Request a Call Back
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden space-x-2 md:inline-block">
              <a
                href="#"
                className="text-white bg-sky-500 hover:bg-sky-700 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sm px-4 py-3"
              >
                Request a Call Back
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="aspect-w-16 aspect-h-9">
          <video
            autoplay
            loop
            muted
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <sesction className="">
        <div class="container border-b-2 border-gray-400">
          <ul class="flex justify-around px-32">
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-sky-500 transition duration-300 font-semibold text-xl"
                href="#overview"
              >
                Overview
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-black hover:text-sky-500 transition duration-300 font-semibold text-xl"
                href="#Itinenary"
              >
                Itinenary
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-black hover:text-sky-500 transition duration-300 font-semibold text-xl"
                href="#Offers"
              >
                Offers
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-black hover:text-sky-500 transition duration-300 font-semibold text-xl"
                href="#Offers"
              >
                Costing
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-black hover:text-sky-500 transition duration-300 font-semibold text-xl"
                href="#Gallery"
              >
                Gallery
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li class="mr-3 px-8 py-6">
              <a
                class="group text-black hover:text-sky-500 transition duration-300 font-semibold text-xl"
                href="#Reviews"
              >
                Reviews
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
          </ul>
        </div>
      </sesction>

      <Overview />

      <section className="" id="Itinenary">
        <div class="grid grid-cols-1 md:grid-cols-7 gap-10 lg:py-24 lg:px-48 px-5 py-5">
          <div class="col-span-4">
            <div className="mt-8">
              <h1 className="font-extrabold text-2xl lg:text-4xl vl">
                Itinenary
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="" id="Offers">
        <div class="grid grid-cols-1 md:grid-cols-7 gap-10 lg:py-24 lg:px-48 px-5 py-5">
          <div class="col-span-4">
            <div className="mt-8">
              <h1 className="font-extrabold text-2xl lg:text-4xl vl">
                Pricing
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
