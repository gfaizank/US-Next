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

    const serverStart = async () => {
      try {
        const response = await fetch('https://urban-space-backend.onrender.com/review', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          console.log('Server alarmed');
        } else {
          console.error('failed');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    serverStart();
  }, [])
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
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
          <img src="assets/ac.png" className="object-contain h-16 w-20" />
          {/* <p className="text-gray-500 font-semibold">AC</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
          <img
            src="assets/fridge.png"
            className="object-contain h-16 w-20 p-1"
          />
          {/* <p className="text-gray-500 font-semibold">Fridge</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
          <img src="assets/tv.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">TV</p> */}
        </div>
      </div>
      <div
        id="cards-2"
        className="mt-1 mx-2 flex flex-row flex-nowrap justify-between"
      >
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
          <img src="assets/wm.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">Wash..</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
          <img src="assets/mc.png" className="object-contain h-16 w-20 p-1" />
          {/* <p className="text-gray-500 font-semibold">Micr..</p> */}
        </div>
        <div className="bg-gray-200 w-28 h-20 m-2 rounded-md flex flex-col items-center justify-center" onClick={()=>{router.push("/services")}}>
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
        <hr className="bg-gray-600 w-48 mx-3" />
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


      {/*Newsletter */}
      <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-600 sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">
            Stay up to date with latest offers, announcements and exclusive discounts.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
            <div className="mx-auto max-w-screen-sm text-xs text-left text-gray-500 newsletter-form-footer">
              We care about the protection of your data.{' '}
              <a href="#" className="font-medium text-primary-600 text-[#bca46c] hover:underline">
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
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />

      <div className="bg-gray-200 flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Information</p>
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />
      <div className="bg-gray-200 flex flex-row items-center justify-between px-4 pt-4 pb-2">
        <p className="text-gray-700">Policies</p>
        <FaPlus className="text-gray-700" />
      </div>
      <hr className="bg-gray-900 w-full py-0.4 " />

      <div className="bg-gray-200 flex flex-col pt-10">
        <div className="flex flex-row justify-center ">
          <SiFacebook className="mr-4 w-7 h-7 text-gray-700" />
          <Link href="https://wa.me/8169943661" >
          <FaWhatsapp className="mr-4 w-7 h-7 text-gray-700" />
          </Link>
          <FaInstagram className="mr-4 w-7 h-7 text-gray-700" />
          <SiLinkedin className="mr-4 w-7 h-7 text-gray-700" />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col pt-5 mb-12">
        <div className="flex flex-row justify-center ">
          <PiCopyright className="h-5 text-gray-700" />
          <p className="ml-1 text-sm text-font-300 text-gray-700 pb-4">
            2024. Urban Space Pvt. Ltd.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-600 text-white py-4 px-2 flex justify-around">
        
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
