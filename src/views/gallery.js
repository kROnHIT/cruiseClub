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
      <div className="grid grid-cols-1 lg:px-48 px-5 py-5">
        <div>
          <h1 className="font-extrabold text-2xl lg:text-4xl vl">Gallery</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
