import React from "react";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { BiBed, BiSun } from "react-icons/bi";
import { DiBitbucket } from "react-icons/di";
import { FaRupeeSign } from "react-icons/fa";

function Pricing() {
  return (
    <section className="pricing bg-sky-50" id="Offers">
      <div className="grid grid-cols-1 lg:px-48 px-5 pt-0">
        <div className="mt-10">
          <h1 className="font-extrabold text-2xl lg:text-4xl vl">Pricing</h1>

          <div className="container mx-auto bg-white rounded-md border mt-14 mb-14">
            <div className="grid grid-cols-3">
              <div className="border-b border-gray-300 bg-sky-100 rounded-tl-md px-14 py-4 col-span-2">
                <p className="text-xl font-semibold">Room Type</p>
              </div>
              <div className="border-l border-b border-gray-300 bg-sky-100 rounded-tr-md px-14 py-4">
                <p className="text-xl font-semibold">Price</p>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="col-span-2 border-b border-gray-300 lg:px-12 lg:py-12 px-2 py-2">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-2">
                    <div className="relative">
                      <img
                        src={require("../assets/image/room.jpg")}
                        className="h-44 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        alt="room pic"
                      />
                      <div
                        className="absolute"
                        style={{ bottom: "10px", right: "10px" }}
                      >
                        <button
                          type="button"
                          className="bg-black text-white px-3 py-1 rounded-md text-sm"
                        >
                          view photos
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 pl-4">
                    <div className="grid grid-rows-5 mt-2">
                      <div>
                        <p className="text-2xl font-bold">Double Non Ac Room</p>
                      </div>

                      <div className="grid grid-cols-2 px-2">
                        <div>
                          <AiOutlineBorderOuter
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            300 Sq Ft.
                          </p>
                        </div>
                        <div>
                          <AiOutlineBorderOuter
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            300 Sq Ft.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <BiSun size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Ocean View
                          </p>
                        </div>
                        <div>
                          <BiSun size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Ocean View
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <BiBed size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Double Bed
                          </p>
                        </div>
                        <div>
                          <BiBed size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Double Bed
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <DiBitbucket
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            Bathroom
                          </p>
                        </div>
                        <div>
                          <DiBitbucket
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            Bathroom
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-b border-gray-300">
                <div className="lg:px-20 lg:py-12 p-2">
                  <p className="text-gray-400 font-bold">per night</p>
                  <p className="line-through text-gray-400 font-bold mt-2">
                    <FaRupeeSign size="15px" className="inline" />
                    <span className="text-20">20,000</span>
                  </p>
                  <p className="text-black font-bold mt-2 flex items-center">
                    <FaRupeeSign className="inline lg:text-3xl text-md" />
                    <span className="lg:text-4xl text-xl">17,499</span>
                  </p>
                  <p className="text-black font-bold mt-2">
                    <span className="lg:text-base text-xs">
                      + 500 taxes & fees
                    </span>
                  </p>
                  <p className="mt-8">
                    <a
                      href="#book"
                      className="text-white bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-lg lg:px-8 lg:py-4 px-4 py-2"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="col-span-2 lg:px-12 lg:py-12 px-2 py-2">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-2">
                    <div className="relative">
                      <img
                        src={require("../assets/image/room.jpg")}
                        className="h-44 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        alt="room pic"
                      />
                      <div
                        className="absolute"
                        style={{ bottom: "10px", right: "10px" }}
                      >
                        <button
                          type="button"
                          className="bg-black text-white px-3 py-1 rounded-md text-sm"
                        >
                          view photos
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 pl-4">
                    <div className="grid grid-rows-5 mt-2">
                      <div>
                        <p className="text-2xl font-bold">Double Non Ac Room</p>
                      </div>

                      <div className="grid grid-cols-2 px-2">
                        <div>
                          <AiOutlineBorderOuter
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            300 Sq Ft.
                          </p>
                        </div>
                        <div>
                          <AiOutlineBorderOuter
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            300 Sq Ft.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <BiSun size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Ocean View
                          </p>
                        </div>
                        <div>
                          <BiSun size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Ocean View
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <BiBed size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Double Bed
                          </p>
                        </div>
                        <div>
                          <BiBed size="22px" className="inline text-sky-500" />
                          <p className="inline px-2 font-semibold text-sm">
                            Double Bed
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 px-2 ">
                        <div>
                          <DiBitbucket
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            Bathroom
                          </p>
                        </div>
                        <div>
                          <DiBitbucket
                            size="22px"
                            className="inline text-sky-500"
                          />
                          <p className="inline px-2 font-semibold text-sm">
                            Bathroom
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-b border-gray-300">
                <div className="lg:px-20 lg:py-12 p-2">
                  <p className="text-gray-400 font-bold">per night</p>
                  <p className="line-through text-gray-400 font-bold mt-2">
                    <FaRupeeSign size="15px" className="inline" />
                    <span className="text-20">20,000</span>
                  </p>
                  <p className="text-black font-bold mt-2 flex items-center">
                    <FaRupeeSign className="inline lg:text-3xl text-md" />
                    <span className="lg:text-4xl text-xl">17,499</span>
                  </p>
                  <p className="text-black font-bold mt-2">
                    <span className="lg:text-base text-xs">
                      + 500 taxes & fees
                    </span>
                  </p>
                  <p className="mt-8">
                    <a
                      href="#book"
                      className="text-white bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-lg lg:px-8 lg:py-4 px-4 py-2"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
