import React from "react";
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

function Overview() {
  return (
    <section className="overview">
      <div class="grid grid-cols-1 md:grid-cols-7 gap-10 lg:pt-24 lg:px-48 px-5 py-5">
        <div class="col-span-4">
          <div>
            <h1 className="font-extrabold text-2xl lg:text-4xl vl">Overview</h1>
            <p className="mt-3 font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="font-extrabold text-2xl lg:text-4xl vl">
              Inclusion
            </h1>
            <div class="grid grid-cols-3 text-center mt-5 gap-16">
              <div className="">
                <div className="flex justify-center">
                  <BiBed size="50px" />
                </div>
                <p className="text-lg font-semibold leading-6">
                  5 Star Accomodation
                </p>
              </div>
              <div>
                <div className="flex justify-center">
                  <FaUtensils size="50px" />
                </div>
                <p className="text-lg font-semibold leading-6">
                  Breakfast and Dinner Included
                </p>
              </div>
              <div>
                <div className="flex justify-center">
                  <AiOutlinePicture size="50px" />
                </div>
                <p className="text-lg font-semibold leading-6">
                  Onboard Entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="mx-auto max-w-4xl bg-white rounded-t-lg rounded-b-md drop-shadow-lg">
            <div class="p-4 bg-[#03123B] text-indigo-100 text-center rounded-t-md drop-shadow-lg py-6">
              <h1 className="font-semibold text-2xl lg:text-2xl">
                Enter your details
              </h1>
            </div>
            <section class="p-4">
              <div class="mb-3 w-full">
                <label class="relative flex">
                  <CalendarIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <select class="border border-gray-300 py-3 pl-14 rounded-sm text-gray-700 w-full">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </label>
              </div>
              <div class="mb-3 w-full">
                <label class="relative flex">
                  <CalendarIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <select class="border border-gray-300 py-3 pl-14 rounded-sm text-gray-700 w-full">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </label>
              </div>
              <div class="mb-3 w-full">
                <label class="relative flex">
                  <CalendarIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <select class="border border-gray-300 py-3 pl-14 rounded-sm text-gray-700 w-full">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </label>
              </div>
              <div class="mb-3 w-full">
                <label class="relative flex">
                  <CalendarIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />
                  <select class="border border-gray-300 py-3 pl-14 rounded-sm text-gray-700 w-full">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </label>
              </div>
              <div class="mb-3 w-full">
                {/* <a href="#" className="text-white bg-sky-500 hover:bg-sky-700 transition duration-300 ease-in-out focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sm px-4 py-3">Request a Call Back</a> */}
                <button class="w-full text-white bg-sky-500 hover:bg-sky-700 transition duration-300 rounded-sm py-4 font-bold text-xl">
                  Proceed to Checkout
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:px-48 px-5 pt-0">
        <div className="mt-8">
          <h1 className="font-extrabold text-2xl lg:text-4xl vl">Exclusion</h1>
          <ul class="list-none mt-3">
            <li class="text-base font-semibold mt-5 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Anything not mentioned in inclusions, Some onboard activities and
              entertainment are chargeable.
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Meals other than specified in the itinerary
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Airfare, Transfers and Sightseeing
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Gratuities charge policy is subject to change at any time
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              All final prices are to be confirmed upon booking.
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Booking is subject to cabin availability and capacity controlled.
              Some onboard activity is chargeable.
            </li>
            <li class="text-base font-semibold mt-3 flex">
              <AiFillCloseCircle size="24px" color="red" className="mr-4" />
              Items of personal nature viz, drinks, laundry, calls, etc.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Overview;