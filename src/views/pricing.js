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
            <div class="grid grid-cols-3">
              <div class="border-b border-gray-300 bg-sky-100 rounded-tl-md px-14 py-4 col-span-2">
                <p class="text-xl font-semibold">Room Type</p>
              </div>
              <div class="border-l-2 border-b border-gray-300 bg-sky-100 rounded-tr-md px-14 py-4">
                <p class="text-xl font-semibold">Price</p>
              </div>
            </div>

            <div class="grid grid-cols-3">
              <div class="border-b border-gray-300 px-12 py-12 ">
                <div className="relative">
                  <img
                    src={require("../assets/image/room.jpg")}
                    className="h-48 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    alt="room pic"
                  />
                  <div
                    class="absolute"
                    style={{ bottom: "10px", right: "10px" }}
                  >
                    <button
                      type="button"
                      class="bg-black text-white px-3 py-1 rounded-md text-sm"
                    >
                      view photos
                    </button>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-300">
                <div class="grid grid-rows-5 px-4 py-12">
                  <div>
                    <p class="text-2xl font-bold">Double Non Ac Room</p>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <AiOutlineBorderOuter
                        size="22px"
                        class="inline text-sky-500"
                      />
                      <p class="inline px-4 font-bold text-sm">300 Sq Ft.</p>
                    </div>
                    <div>
                      <AiOutlineBorderOuter
                        size="22px"
                        class="inline text-sky-500"
                      />
                      <p class="inline px-4 font-bold text-sm">300 Sq Ft.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <BiSun size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Ocean View</p>
                    </div>
                    <div>
                      <BiSun size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Ocean View</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <BiBed size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Double Bed</p>
                    </div>
                    <div>
                      <BiBed size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Double Bed</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <DiBitbucket size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Bathroom</p>
                    </div>
                    <div>
                      <DiBitbucket size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Bathroom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-l border-b border-gray-300">
                <div class="px-20 py-12">
                  <p className="text-gray-400 font-bold">per night</p>
                  <p className="line-through text-gray-400 font-bold mt-2">
                    <FaRupeeSign size="15px" class="inline" />
                    <span className="text-20">20,000</span>
                  </p>
                  <p className="text-black font-bold mt-2 flex items-center">
                    <FaRupeeSign class="inline text-3xl" />
                    <span className="text-4xl">17,499</span>
                  </p>
                  <p className="text-black font-bold mt-2">
                    <span className="text-base">+ 500 taxes & fees</span>
                  </p>
                  <p className="mt-8">
                    <a
                      href="#book"
                      className="text-white bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-lg px-8 py-4"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3">
              <div class="border-gray-300 px-12 py-12 relative">
                <div className="relative">
                  <img
                    src={require("../assets/image/room.jpg")}
                    className="h-48 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    alt="room pic"
                  />
                  <div
                    class="absolute"
                    style={{ bottom: "10px", right: "10px" }}
                  >
                    <button
                      type="button"
                      class="bg-black text-white px-3 py-1 rounded-md text-sm"
                    >
                      view photos
                    </button>
                  </div>
                </div>
              </div>
              <div class="border-gray-300">
                <div class="grid grid-rows-5 px-4 py-12">
                  <div>
                    <p class="text-2xl font-bold">Double Non Ac Room</p>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <AiOutlineBorderOuter
                        size="22px"
                        class="inline text-sky-500"
                      />
                      <p class="inline px-4 font-bold text-sm">300 Sq Ft.</p>
                    </div>
                    <div>
                      <AiOutlineBorderOuter
                        size="22px"
                        class="inline text-sky-500"
                      />
                      <p class="inline px-4 font-bold text-sm">300 Sq Ft.</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <BiSun size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Ocean View</p>
                    </div>
                    <div>
                      <BiSun size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Ocean View</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <BiBed size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Double Bed</p>
                    </div>
                    <div>
                      <BiBed size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Double Bed</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 px-2 py-2">
                    <div>
                      <DiBitbucket size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Bathroom</p>
                    </div>
                    <div>
                      <DiBitbucket size="22px" class="inline text-sky-500" />
                      <p class="inline px-4 font-bold text-sm">Bathroom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-l border-gray-300">
                <div class="px-20 py-12">
                  <p className="text-gray-400 font-bold">per night</p>
                  <p className="line-through text-gray-400 font-bold mt-2">
                    <FaRupeeSign size="15px" class="inline" />
                    <span className="text-20">25,000</span>
                  </p>
                  <p className="text-black font-bold mt-2 flex items-center">
                    <FaRupeeSign class="inline text-3xl" />
                    <span className="text-4xl">23,499</span>
                  </p>
                  <p className="text-black font-bold mt-2">
                    <span className="text-base">+ 500 taxes & fees</span>
                  </p>
                  <p className="mt-8">
                    <a
                      href="#book"
                      className="text-white bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-lg px-8 py-4"
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
