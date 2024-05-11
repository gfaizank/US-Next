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
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [dummy, setDummy]=useState([]);

  const router = useRouter();

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  useEffect(() => {
    console.log(localStorage.getItem("email"));

  }, []);

  return (
    <div className="h-full min-h-screen bg-white">
      <Navbar />

      {/*Search Bar*/}

      <div className="rounded-md border flex lg:hidden lg:ml-16 p-2 lg:mx-0 lg:w-[90vw] mx-4 mt-8 mb-2">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full text-black outline-none"
        />
      </div>

      {/* Cards*/}
      <div
        id="cards-1"
        className="mt-10 mx-2 flex lg:hidden flex-row lg:px-12 flex-nowrap justify-between"
      >
        <div
          className="bg-gray-200 w-28 h-20 lg:w-64 lg:h-48 m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/ac.png"
            className="object-contain lg:h-40 lg:w-56 h-16 w-20"
          />
          {/* <p className="text-gray-500 font-semibold">AC</p> */}
        </div>
        <div
          className="bg-gray-200 w-28 h-20 lg:w-64 lg:h-48  m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/fridge.png"
            className="object-contain h-16 w-20 lg:h-40 lg:w-56 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">Fridge</p> */}
        </div>
        <div
          className="bg-gray-200 w-28 h-20 lg:w-64 lg:h-48  m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/tv.png"
            className="object-contain lg:h-40 lg:w-56 h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">TV</p> */}
        </div>
      </div>
      <div
        id="cards-2"
        className="mt-1 mx-2 flex  lg:hidden flex-row lg:px-12 flex-nowrap justify-between"
      >
        <div
          className="bg-gray-200 lg:w-64 lg:h-48 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/wm.png"
            className="object-contain lg:h-40 lg:w-56 h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">Wash..</p> */}
        </div>
        <div
          className="bg-gray-200 w-28 h-20 lg:w-64 lg:h-48 m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/mc.png"
            className="object-contain lg:h-40 lg:w-56 h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">Micr..</p> */}
        </div>
        <div
          className="bg-gray-200 w-28 h-20 lg:w-64 lg:h-48  m-2 rounded-md flex flex-col items-center justify-center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <img
            src="assets/ro.png"
            className="object-contain lg:h-40 lg:w-56 h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">RO</p> */}
        </div>
      </div>

      {/* For Large screen  */}

      <div className="px-20 mt-20 lg:flex max-h-fit pb-10 gap-40 hidden">
        <div className="pb-8">
          <h1 className="text-3xl w-[35vw] font-semibold text-gray-700">
            Appliance Repair & Service at affordable Prices
          </h1>
          <div className="mt-10 w-[40vw] px-6 py-6 h-[68vh] pb-8 bg-white rounded-lg border">
            <div class="relative">
              <input
                placeholder="What Are You Looking For ?"
                class="text-black pl-10 pr-28 py-3 border rounded-md focus:outline-none font-light text-sm"
              />
              <svg
                class="absolute inset-y-0 left-0 w-5 h-5 mt-3 ml-3 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.875 2a8.875 8.875 0 105.528 15.818l3.89 3.89 1.414-1.415-3.89-3.889A8.875 8.875 0 0010.875 2zM4 10.875a6.875 6.875 0 1113.75 0 6.875 6.875 0 01-13.75 0z"
                  fill="#545454"
                ></path>
              </svg>
            </div>

            <div
              id="cards-1"
              className="mt-5 flex flex-row flex-nowrap gap-3 justify-between"
            >
              <div
                className="bg-gray-200 w-28 h-20 lg:w-60 cursor-pointer lg:h-44 my-2 rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/ac.png"
                  className="object-contain lg:h-40 lg:w-40 h-16 w-20"
                />
                {/* <p className="text-gray-500 font-semibold">AC</p> */}
              </div>
              <div
                className="bg-gray-200 w-28 h-20 lg:w-60 lg:h-44 cursor-pointer my-2 rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/fridge.png"
                  className="object-contain h-16 w-20 lg:h-40 lg:w-36 p-1"
                />
                {/* <p className="text-gray-500 font-semibold">Fridge</p> */}
              </div>
              <div
                className="bg-gray-200 w-28 h-20 lg:w-60 lg:h-44 cursor-pointer my-2 rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/tv.png"
                  className="object-contain lg:h-40 lg:w-40 h-16 w-20 p-1"
                />
                {/* <p className="text-gray-500 font-semibold">TV</p> */}
              </div>
            </div>
            <div
              id="cards-2"
              className="mt-2 flex  flex-row gap-3 flex-nowrap justify-between"
            >
              <div
                className="bg-gray-200 lg:w-60 lg:h-44 w-28 h-20 my-2 cursor-pointer rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/wm.png"
                  className="object-contain lg:h-40 lg:w-36 h-16 w-20 p-1"
                />
                {/* <p className="text-gray-500 font-semibold">Wash..</p> */}
              </div>
              <div
                className="bg-gray-200 w-28 h-20 lg:w-60 lg:h-44 my-2 cursor-pointer rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/mc.png"
                  className="object-contain lg:h-40 lg:w-32 h-16 w-20 p-1"
                />
                {/* <p className="text-gray-500 font-semibold">Micr..</p> */}
              </div>
              <div
                className="bg-gray-200 w-28 h-20 lg:w-60 lg:h-44 cursor-pointer my-2 rounded-md flex flex-col items-center justify-center"
                onClick={() => {
                  router.push("/services");
                }}
              >
                <img
                  src="assets/ro.png"
                  className="object-contain lg:h-40 lg:w-32 h-16 w-20 p-1"
                />
                {/* <p className="text-gray-500 font-semibold">RO</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-auto">
          <div>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* Sell 1 */}
      <div className="flex items-center justify-center lg:px-12 lg:mt-14 mt-5">
        <p className="text-gray-400 text-sm lg:text-base font-semibold lg:ml-0 ml-4">
          Grab Offer
        </p>
        <hr className="bg-gray-600 lg:w-[84vw] w-2/3 mx-3" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="rounded-md flex lg:mt-5 mt-8 w-[90vw] overflow-hidden lg:mb-7 items-center justify-center mx-2">
          <img
            src="assets/banner1.jpeg"
            alt=""
            className="object-cover content-center overflow-hidden hover:scale-105 duration-500 lg:h-[350px] h-28 w-full mx-auto my-auto rounded-md"
          />
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 mt-4 w-full p-1" />

      {/* Carousel */}
      <div className="flex flex-col mt-6 p-auto relative">
        <div className="lg:flex hidden">
          <button class="absolute top-32 left-10 transform -translate-y-1/2 bg-gray-200 px-3 py-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0F0F0F"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0F0F0F"
                fill-rule="evenodd"
                d="M6.47 2.97l-4.5 4.5a.75.75 0 000 1.06l4.5 4.5 1.06-1.06-3.22-3.22h9.19v-1.5H4.31l3.22-3.22-1.06-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex overflow-x-scroll lg:pb-6 pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:justify-between lg:px-[60px] lg:ml-0 lg:w-full md:ml-20 ml-2">
            <div className="inline-block lg:px-1 px-3">
              <div className="w-64 lg:w-[500px] h-35 lg:max-w-md max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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

            <div className="inline-block lg:px-1 px-3">
              <div className="w-64 lg:w-[500px] h-35 lg:max-w-md max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
            <div className="inline-block lg:px-1 px-3">
              <div className="w-64 lg:w-[500px] h-35 lg:max-w-md max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
        <div className="lg:flex hidden">
          <button class="absolute top-32 right-10 transform -translate-y-1/2 bg-gray-200 px-3 py-3 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0F0F0F"
              viewBox="0 0 16 16"
            >
              <path
                fill="#0F0F0F"
                fill-rule="evenodd"
                d="M11.69 8.75H2.5v-1.5h9.19L8.47 4.03l1.06-1.06 4.5 4.5a.75.75 0 010 1.06l-4.5 4.5-1.06-1.06 3.22-3.22z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full p-1" />

      {/*Most Booked */}

      <div className="flex items-center lg:px-14 lg:justify-start justify-center mt-5 lg:mb-6 mb-4">
        <p className="text-gray-400 text-sm lg:text-base font-semibold ml-4">
          Most Booked
        </p>
        <hr className="bg-gray-600 w-48 mx-3" />
      </div>

      {/*Most Booked Cards */}
      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:w-full lg:px-14 lg:justify-between lg:ml-0 md:ml-20 ml-2">
            {/* Hard-coded cards */}
            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 bg-white lg:h-60 lg:w-56 h-24 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5 flex lg:hidden"></div>
                <img
                  src="assets/ac-repair.jpeg"
                  alt="Service 1"
                  className="w-full h-full object-fill rounded-lg "
                />
              </div>
              <p className="text-center lg:text-base lg:font-semibold font-normal text-sm text-gray-500 lg:mt-3 mt-2">
                AC Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 lg:h-60 lg:w-56 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5 lg:hidden flex"></div>
                <img
                  src="assets/tv-repair.jpeg"
                  alt="Service 2"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center lg:text-base lg:font-semibold font-normal text-sm text-gray-500 mt-2">
                TV Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 lg:h-60 lg:w-56 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5 lg:hidden flex"></div>
                <img
                  src="assets/fridge-repair.png"
                  alt="Service 3"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center lg:text-base lg:font-semibold font-normal text-sm text-gray-500 mt-2">
                Refrigerator Repair
              </p>
            </div>

            <div className="inline-block px-3">
              <div className="flex flex-col border w-24 h-24 lg:h-60 lg:w-56 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="h-5 lg:hidden flex"></div>
                <img
                  src="assets/micro-repair.jpeg"
                  alt="Service 4"
                  className="w-full h-full object-fill rounded-lg"
                />
              </div>
              <p className="text-center lg:text-base lg:font-semibold font-normal text-sm text-gray-500 mt-2">
                Microwave Repair
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full p-1" />

      {/* Sell 2 */}

      <div className="flex items-center justify-center lg:px-12 lg:mt-14 mt-5">
        <p className="text-gray-400 text-sm lg:text-base font-semibold lg:ml-0 ml-4">
          Grab Offer
        </p>
        <hr className="bg-gray-600 lg:w-[84vw] w-2/3 mx-3" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="rounded-md flex lg:mt-5 mt-8 w-[90vw] overflow-hidden lg:mb-7 items-center justify-center mx-2">
          <img
            src="assets/banner2.jpeg"
            alt=""
            className="object-fill content-center overflow-hidden hover:scale-105 duration-500 lg:h-[380px] h-28 w-full mx-auto my-auto rounded-md"
          />
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full mt-5 p-1" />

      {/*Newsletter */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-600 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">
              Stay up to date with latest offers, announcements and exclusive
              discounts.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#bca46c] border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm lg:text-sm lg:mt-3 text-xs text-left text-gray-500 newsletter-form-footer">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 text-[#bca46c] hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>

      {/*break bar */}
      <hr className="bg-gray-100 w-full mt-5 p-1" />

      <div className="bg-gray-200 flex flex-col lg:px-14 items-center justify-center">
        <p className="mx-2 my-1 text-sm lg:text-lg font-semibold text-gray-600 lg:pt-6 pt-4">
          Urban Space, We are one stop solution for all your electronic needs
        </p>
        <p className="mx-2 my-1 text-xs lg:text-sm lg:mt-4 text-gray-400 ">
          At Urban Space, we believe in transforming living spaces into
          extraordinary havens that reflect modern lifestyles. Situated in the
          heart of Kharghar, Navi Mumbai, we are dedicated to providing
          top-notch home appliance repair services to enhance your everyday
          convenience.
        </p>
      </div>
      <div className="bg-gray-200 flex flex-row lg:pt-8 lg:px-14 items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Urban Space</p>
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />

      <div className="bg-gray-200 flex flex-row lg:px-14 items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Information</p>
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />
      <div className="bg-gray-200 flex flex-row lg:px-14 items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Policies</p>
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />

      <div className="bg-gray-200 flex flex-col pt-10">
        <div className="flex flex-row lg:gap-7 justify-center ">
          <SiFacebook className="mr-4 w-7 h-7 text-gray-700" />
          <Link href="https://wa.me/8169943661">
            <FaWhatsapp className="mr-4 w-7 h-7 text-gray-700" />
          </Link>
          <FaInstagram className="mr-4 w-7 h-7 text-gray-700" />
          <SiLinkedin className="mr-4 w-7 h-7 text-gray-700" />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col pt-5 lg:pb-4 lg:mb-0 mb-12">
        <div className="flex flex-row justify-center ">
          <PiCopyright className="h-5 text-gray-700" />
          <p className="ml-1 text-sm text-font-300 text-gray-700 pb-4">
            2024. Urban Space Pvt. Ltd.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-600 text-white py-4 px-2 flex lg:hidden justify-around">
        <IoHomeOutline
          size={20}
          onClick={() => handleIconClick("home")}
          className={`focus:outline-none focus:ring ${
            selectedIcon === "home" ? "text-yellow-500" : ""
          }`}
        />

        <Link href="/services">
          <MdOutlineMiscellaneousServices
            size={24}
            onClick={() => handleIconClick("services")}
            className={`focus:outline-none focus:ring ${
              selectedIcon === "services" ? "text-yellow-500" : ""
            }`}
          />
        </Link>
        <Link href="/cart">
          <IoCartOutline
            size={24}
            onClick={() => handleIconClick("cart")}
            className={`focus:outline-none focus:ring ${
              selectedIcon === "cart" ? "text-yellow-500" : ""
            }`}
          />
        </Link>
        <Link href="/account">
          <FaRegUser
            size={20}
            onClick={() => handleIconClick("user")}
            className={`sm:hover:text-yellow-500 hover:font-semibold focus:outline-none focus:ring ${
              selectedIcon === "user" ? "text-yellow-500" : ""
            }`}
          />
        </Link>
      </footer>
    </div>
  );
}
