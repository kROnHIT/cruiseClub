import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Policy() {
  return (
    <section className="">
      <div className="grid grid-cols-2 lg:px-48 px-5 py-28">
        <div>
          <div>
            <h1 className="font-extrabold text-2xl lg:text-4xl vl">
              Payment Policy
            </h1>
            <p className="text-base font-semibold mt-6 flex">
              <AiFillCheckCircle size="24px" color="#0ea6e9" className="mr-4" />
              100% payment required upon reconfirmation
            </p>
          </div>
          <div className="mt-14">
            <h1 className="font-extrabold text-2xl lg:text-4xl vl">
              Cancellation Policy
            </h1>
            <p className="text-base font-semibold mt-6 flex">
              <AiFillCheckCircle size="24px" color="#0ea6e9" className="mr-4" />
              31 days or more before date of departure : 50% of cost
            </p>
            <p className="text-base font-semibold mt-6 flex">
              <AiFillCheckCircle size="24px" color="#0ea6e9" className="mr-4" />
              30 days or less before date of departure : 100% of cost
            </p>
          </div>
        </div>
        <img
          src={require("../assets/image/room.jpg")}
          className="w-full rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          alt="room pic"
        />
      </div>
    </section>
  );
}

export default Policy;
