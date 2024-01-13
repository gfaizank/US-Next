"use client";
import Navbar from "@/components/navbar";
import { FaPlus } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { PiCopyright } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };
  return (
    <div className="h-full min-h-screen bg-white">
      <Navbar />

      {/*Search Bar*/}

      <div className="rounded-md border p-2 mx-4 mt-8 mb-2">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none"
        />
      </div>

      {/* Cards*/}
      <div
        id="cards-1"
        className="mt-10 mx-2 flex flex-row flex-nowrap justify-between"
      >
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img src="assets/ac.png" className="object-contain h-16 w-20" />
          {/* <p className="text-gray-500 font-semibold">AC</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img
            src="assets/fridge.png"
            className="object-contain h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">Fridge</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img src="assets/tv.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">TV</p> */}
        </div>
      </div>
      <div
        id="cards-2"
        className="mt-1 mx-2 flex flex-row flex-nowrap justify-between"
      >
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img src="assets/wm.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">Wash..</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img src="assets/mc.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">Micr..</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center">
          <img src="assets/ro.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">RO</p> */}
        </div>
      </div>

      {/* Sell 1 */}
      <div className="flex items-center justify-center mt-5">
        <p className="text-gray-400 text-sm font-semibold ml-4">Grab Offer</p>
        <hr className="bg-gray-600 w-2/3 mx-3" />
      </div>
      <div className="rounded-md flex items-center justify-center p-3 mx-2">
        <img
          src="assets/banner1.jpeg"
          alt=""
          className="object-fill h-28 w-full rounded-md"
        />
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 mt-4 w-full p-1" />

      {/* Carousel */}
      <div className="flex flex-col bg-white mt-6 p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-2">
            <div className="inline-block px-3">
              <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <video
                  width="100%"
                  height="200%"
                  controls
                  style={{ objectFit: "cover" }}
                >
                  <source src="assets/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="inline-block px-3">
              <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <video
                  width="100%"
                  height="200%"
                  controls
                  style={{ objectFit: "cover" }}
                >
                  <source src="assets/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <video
                  width="100%"
                  height="200%"
                  controls
                  style={{ objectFit: "cover" }}
                >
                  <source src="assets/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full p-1" />

      {/*Most Booked */}

      <div className="flex items-center justify-center mt-5 mb-4">
        <p className="text-gray-400 text-sm font-semibold ml-4">Most Booked</p>
        <hr className="bg-gray-600 w-60 mx-3" />
      </div>

      {/*Most Booked Cards */}
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-2">
            {/* Hard-coded cards */}
            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5"></div>
                <img
                  src="assets/ac-repair.jpeg"
                  alt="Service 1"
                  className="w-full h-full object-fill rounded-lg "
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                AC Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5"></div>
                <img
                  src="assets/tv-repair.jpeg"
                  alt="Service 2"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                TV Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5"></div>
                <img
                  src="assets/fridge-repair.png"
                  alt="Service 3"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Refrigerator Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5"></div>
                <img
                  src="assets/micro-repair.jpeg"
                  alt="Service 4"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Microwave Repair
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full p-1" />

      {/* Sell 2 */}
      <div className="flex items-center justify-center mt-5">
        <p className="text-gray-400 text-sm font-semibold ml-4">Grab Offer</p>
        <hr className="bg-gray-600 w-2/3 mx-3" />
      </div>
      <div className="rounded-md flex items-center justify-center p-3 mx-2">
        <img
          src="assets/banner2.jpeg"
          alt=""
          className="object-fill h-28 w-full rounded-md"
        />
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full mt-5 p-1" />

      <div className="bg-gray-200 flex flex-col items-center justify-center">
        <p className="mx-2 my-1 text-sm font-semibold text-gray-600 pt-4">
          Urban Space, We are one stop solution for all your electronic needs
        </p>
        <p className="mx-2 my-1 text-xs text-gray-400 ">
          At Urban Space, we believe in transforming living spaces into
          extraordinary havens that reflect modern lifestyles. Situated in the
          heart of Kharghar, Navi Mumbai, we are dedicated to providing
          top-notch home appliance repair services to enhance your everyday
          convenience.
        </p>
      </div>
      <div className="bg-gray-200 flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Urban Space</p>
        <FaPlus />
      </div>
      <hr className="bg-gray-600 w-full " />

      <div className="bg-gray-200 flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Information</p>
        <FaPlus />
      </div>
      <hr className="bg-gray-600 w-full " />
      <div className="bg-gray-200 flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Policies</p>
        <FaPlus />
      </div>
      <hr className="bg-gray-600 w-full " />

      <div className="bg-gray-200 flex flex-col pt-10">
        <div className="flex flex-row justify-center ">
          <SiFacebook className="mr-4 w-7 h-7" />
          <FaWhatsapp className="mr-4 w-7 h-7" />
          <FaInstagram className="mr-4 w-7 h-7" />
          <SiLinkedin className="mr-4 w-7 h-7" />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col pt-5 mb-12">
        <div className="flex flex-row justify-center ">
          <PiCopyright className="h-5" />
          <p className="ml-1 text-sm text-font-300 pb-4">
            2024. Urban Space Pvt. Ltd.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-600 text-white py-4 px-2 flex justify-around">
        <IoHomeOutline
          size={24}
          onClick={() => handleIconClick("home")}
          className={`focus:outline-none focus:ring ${
            selectedIcon === "home" ? "text-yellow-500" : ""
          }`}
        />
        <MdOutlineMiscellaneousServices
          size={24}
          onClick={() => handleIconClick("services")}
          className={`focus:outline-none focus:ring ${
            selectedIcon === "services" ? "text-yellow-500" : ""
          }`}
        />
        <IoCartOutline
          size={24}
          onClick={() => handleIconClick("cart")}
          className={`focus:outline-none focus:ring ${
            selectedIcon === "cart" ? "text-yellow-500" : ""
          }`}
        />
        <FaRegUser
          size={24}
          onClick={() => handleIconClick("user")}
          className={`focus:outline-none focus:ring ${
            selectedIcon === "user" ? "text-yellow-500" : ""
          }`}
        />
      </footer>
    </div>
  );
}
