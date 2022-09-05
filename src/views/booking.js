import React from "react";
import { FaCalendarAlt, FaUserAlt, FaBed, FaRupeeSign } from "react-icons/fa";

function Overview() {
  return (
    <section className="booking-bg">
      <div className="grid grid-cols-1 lg:px-48 px-5 py-28">
        <div>
          <h1 className="font-extrabold text-2xl lg:text-4xl vl text-white">
            Enter The Details
          </h1>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 mt-8 lg:px-8">
            <div className="w-full">
              <label className="relative flex">
                <FaCalendarAlt className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
                <select className="border border-gray-100 py-4 pl-14 rounded-sm text-gray-500 w-full">
                  <option selected>Select Cruise Date</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="relative flex">
                <FaUserAlt className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
                <select className="border border-gray-300 py-4 pl-14 rounded-sm text-gray-500 w-full">
                  <option selected>Number of People</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="relative flex">
                <FaBed className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
                <select className="border border-gray-300 py-4 pl-14 rounded-sm text-gray-500 w-full">
                  <option selected>Select Room Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="relative flex">
                <FaRupeeSign className="text-gray-500 pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
                <select className="border border-gray-300 py-4 pl-14 rounded-sm text-gray-500 w-full">
                  <option selected>Advance Payment</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </label>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="text-white bg-sky-500 rounded-sm font-medium text-xl px-20 py-4"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
