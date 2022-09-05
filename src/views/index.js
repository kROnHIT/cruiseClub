import React, { useState, useEffect, useCallback } from "react";
import Overview from "./overview";
import Gallery from "./gallery";
import Pricing from "./pricing";
import Layout from "./layout";

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
          <div className="aspect-w-16 aspect-h-9">
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="">
          <div className="border-b border-gray-300">
            <ul className="flex justify-around px-32">
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
      </Layout>
    </div>
  );
}

export default App;
