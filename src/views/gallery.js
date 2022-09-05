import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  CalendarIcon,
  WalletIcon,
  UserIcon,
  CurrencyRupeeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AiFillCloseCircle, AiOutlinePicture } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa";

const title = [
  {
    title: "All",
  },
  {
    title: "Cruise",
  },
  {
    title: "Cruise Interior",
  },
  {
    title: "Rooms",
  },
  {
    title: "Restaurant",
  },
  {
    title: "Swimming Pool",
  },
];

const imgData = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

function Overview() {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:px-48 px-5 py-16">
        <h1 className="font-extrabold text-2xl lg:text-4xl vl">Gallery</h1>
        <p className="mb-8 mt-2">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl ">
            {title.map((item, index) => (
              <Tab key={index}>
                {({ selected }) => (
                  <button
                    className={` px-6 py-2 gap-5
                      ${
                        selected
                          ? "bg-sky-500 text-white"
                          : "bg-gray-100 text-black"
                      }
                      `}
                  >
                    {item.title}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                interval={6100}
              >
                <div className="mt-5">
                  <div className="columns-2 md:columns-3 lg:columns-4">
                    {imgData.map((img) => (
                      <div className="relative mb-4 before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                        <img
                          className="w-full"
                          src={require(`../assets/image/${img}`)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="">Legend 2</p>
                </div>
              </Carousel>
            </Tab.Panel>
            <Tab.Panel>
              <p>ff</p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

export default Overview;
