import React, { useState, useEffect } from "react";
import Overview from "./overview";
import Gallery from "./gallery";
import Pricing from "./pricing";
import Booking from "./booking";
import Policy from "./policy";
import Testimonial from "./testimonial";
import Layout from "./layout";
import { FaStar, FaRegClock } from "react-icons/fa";
function App() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <div className="App">
      <Layout>
        <section className="bg-white dark:bg-gray-900">
          <div className="relative w-full">
            <video autoPlay loop muted className="w-full">
              <source
                src={require("../assets/image/video.mp4")}
                type="video/mp4"
              />
            </video>
            <div className="absolute bottom-0 bg-black/[.5] w-full grid lg:grid-cols-3 grid-cols-1 gap-y-4 py-12 px-4 lg:px-44 text-white">
              <div className="col-span-2">
                <p className="lg:text-3xl text-lg font-bold mb-3">
                  Cruise from Kochi to Lakshadweep (4D/3N)
                </p>
                <div className="flex space-x-6">
                  <p>
                    <FaRegClock className="inline mr-1" />4 Days / 3 Night
                  </p>
                  <p>Kochi, Kerala</p>
                  <div>
                    <FaStar className="inline text-base text-yellow-500 mr-1" />
                    <FaStar className="inline text-base text-yellow-500 mr-1" />
                    <FaStar className="inline text-base text-yellow-500 mr-1" />
                    <FaStar className="inline text-base text-yellow-500 mr-1" />
                    <FaStar className="inline text-base text-gray-400" />
                  </div>
                  <p>
                    Rating: 4 Star{" "}
                    <a href="" className="text-sky-400 underline">
                      ( See All Reviews )
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="#book"
                  className="text-white bg-sky-400 hover:bg-sky-500 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-lg px-10 lg:py-4 py-2"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="border-b border-gray-300">
            <ul className="flex justify-around px-32 overflow-scroll">
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#overview"
                >
                  Overview
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-black hover:text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#Itinenary"
                >
                  Itinenary
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-black hover:text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#Offers"
                >
                  Offers
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-black hover:text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#Offers"
                >
                  Costing
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-black hover:text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#Gallery"
                >
                  Gallery
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
              <li className="lg:mr-3 px-2 lg:px-8 py-6">
                <a
                  className="group text-black hover:text-sky-500 transition duration-300 font-semibold lg:text-xl "
                  href="#Reviews"
                >
                  Reviews
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Overview />

        <section className="" id="Itinenary">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 lg:py-24 lg:px-48 px-5 py-5">
            <div className="col-span-4">
              <div className="mt-8">
                <h1 className="font-extrabold text-2xl lg:text-4xl vl">
                  Itinenary
                </h1>
              </div>
            </div>
          </div>
        </section>
        <Pricing />
        <Gallery />
        <Testimonial />
        <Booking />
        <Policy />
      </Layout>
    </div>
  );
}

export default App;
