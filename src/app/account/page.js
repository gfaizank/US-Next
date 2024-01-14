"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import AdCarousel from "@/components/adCarousel";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrBasket } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-col h-full min-h-screen bg-gray-100">
      {/*Back Link */}
      <Link href="/" className="flex items-start ml-4 pt-6">
        <FaArrowLeft />
      </Link>

      {/* Accordion with Name, Email and Number */}

      <div className="group">
        <div
          className="flex flex-row justify-between items-center mt-6 bg-white rounded-lg mx-4 py-3 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h1 className="ml-4 font-semibold">Hi, Faizan</h1>
          <IoIosArrowDown
            className={`mr-4 text-xl text-gray-600 transform transition-transform ${
              isOpen ? "-rotate-180" : ""
            }`}
          />
        </div>

        <div
          className={`bg-white rounded-md -mt-2 mx-4 py-3 px-3 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-row ml-2 text-xs text-gray-500 items-center">
            <MdPhoneInTalk />
            <p className="ml-2">+91 8765483471</p>
          </div>

          <div className="flex flex-row ml-2 mt-2 text-xs text-gray-500 items-center">
            <IoMailOpenOutline />
            <p className="ml-2">faizan2317.fk@gmail.com</p>
          </div>
        </div>
      </div>

      {/*Ad-Carousel */}
      <AdCarousel />

      {/* Remaining page stuff */}
      <div className="flex flex row">
        <div className="flex flex-row rounded-lg items-center w-full ml-2 py-3 bg-white">
          <MdPeople className="ml-4 text-gray-500 text-md" />
          <h1 className="ml-2 text-sm text-gray-500 ">Referral</h1>
        </div>
        <div className="flex flex-row rounded-lg items-center w-full ml-2 mr-2 py-3 bg-white">
          <CgProfile className="ml-4 text-gray-500 text-md" />
          <h1 className="ml-2 text-sm text-gray-500">Profile</h1>
        </div>
      </div>

      <div className="flex flex-row rounded-lg justify-between items-center w-76 mr-2 ml-2 mt-4 py-3 bg-white">
        <div className="flex flex-row items-center">
          <GrBasket className="ml-4 text-md text-gray-500" />
          <h1 className="ml-2 text-sm text-gray-500">My Orders</h1>
        </div>
        <IoIosArrowForward className="mr-4 text-gray-500 text-lg" />
      </div>

      <div className="flex flex-row rounded-lg items-center w-76 mr-2 ml-2 mt-4 py-3 bg-white">
        <CiSettings className="ml-4 text-2xl text-gray-500" />
        <h1 className="ml-1 text-sm text-gray-500">Settings</h1>
      </div>

      <div className="flex flex-row rounded-lg items-center w-76 mr-2 ml-2 mt-4 py-3 bg-white">
        <AiOutlineLogout className="ml-4 text-xl text-gray-500" />
        <h1 className="ml-2 text-sm text-gray-500">Logout</h1>
      </div>

      <div className="flex flex-col mb-5 items-center justify-center">
        <img src="assets/banner3.png" className="w-40 opacity-75" />
        <h1 className="text-md font-semibold text-gray-400">
          You don't have any active orders
        </h1>
      </div>

      {/* <div className="sticky bottom-16 left-72 w-10 h-10 rounded-full bg-red-600 py-3 ml-6 text-center text-sm ml-4">
        <TbMessages className=" flex justify-center items-center pl-1 pb-1 w-9 h-6 text-white" />
      </div> */}
      <div class="rounded-full flex flex-col right-4 fixed bottom-0 transform translate-y-[-100%] bg-red-600 w-12 h-12 py-3">
      <TbMessages className=" flex justify-center items-center w-12 h-10 text-white" />
      </div>
    </div>
  );
};

export default Account;
