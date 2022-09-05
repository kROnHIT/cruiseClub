import React, { useState, useEffect } from "react";
import {
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti";

const linkList = [
  {
    title: "Blogs",
    link: "#",
  },
  {
    title: "Group Booking Form",
    link: "#",
  },
  {
    title: "Lost and found",
    link: "#",
  },
  {
    title: "Agent Login",
    link: "#",
  },
  {
    title: "About Us",
    link: "#",
  },
  {
    title: "Deck Plan",
    link: "#",
  },
  {
    title: "View Brochure",
    link: "#",
  },
  {
    title: "Corporate Brochure",
    link: "#",
  },
  {
    title: "Valet Services Mumbai",
    link: "#",
  },
  {
    title: "Ports",
    link: "#",
  },
];
const offer = [
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Onboard Policy",
    link: "#",
  },
  {
    title: "Health Waves Policy",
    link: "#",
  },
  {
    title: "Clean Waves Policy",
    link: "#",
  },
  {
    title: "FAQs",
    link: "#",
  },
  {
    title: "Tearms and Conditions",
    link: "#",
  },
  {
    title: "Passenger Cruise Ticket Contact",
    link: "#",
  },
  {
    title: "Cruise SOP",
    link: "#",
  },
  {
    title: "Investor Relation",
    link: "#",
  },
];
function Footer() {
  return (
    <div>
      <div className="pt-6 lg:pt-12 footer-bg">
        <div className="px-4 lg:px-48 mx-auto grid grid-cols-4 gap-16">
          <div className="col-span-2">
            <img
              src={require("../../assets/image/logo2.png")}
              className="mb-5"
              alt="Landwind Logo"
            />
            <p className="text-gray-900 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. It was popularised
            </p>
            <div className="mt-4">
              <ul className="flex">
                <li className="mr-3">
                  <TiSocialLinkedin size="25px" />
                </li>
                <li className="mr-3">
                  <TiSocialInstagram size="25px" />
                </li>
                <li className="mr-3">
                  <TiSocialTwitter size="25px" />
                </li>
                <li className="mr-3">
                  <TiSocialFacebook size="25px" />
                </li>
                <li className="mr-3">
                  <TiSocialYoutube size="25px" />
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <h6 className="font-bold text-sky-500 mb-2">Link</h6>
            <div>
              {linkList.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 font-semibold py-1 block hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h6 className="font-bold text-sky-500 mb-2">Privacy & Policy</h6>
            <div>
              {offer.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-700 font-semibold py-1 block hover:underline"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black mt-4 py-4 text-center">
          <div className="container px-4 mx-auto">
            <p className="text-white">
              &copy; 2022 Cordelia Cruises All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
