import React, { useState, useEffect } from "react";

function Header() {
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
                    src={require("../../assets/image/logo2.png")}
                    className="h-6 mr-3 sm:h-9"
                    alt="Cruise"
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
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 "
                    >
                      Find Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 "
                    >
                      Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 "
                    >
                      Tour Packages
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 lg:border-0 lg:p-0 "
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
    </div>
  );
}

export default Header;
