import { FaArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-white">
      {/*Navbar Component */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row mt-4 items-center">
          <FaArrowLeft className="ml-4 text-lg text-gray-500" />
          <h1 className="ml-6 text-lg text-gray-500 font-semibold">Cart</h1>
        </div>

        <div className="flex flex-row items-center rounded-lg bg-gray-100 mt-4 mr-4 px-1 py-2 border">
          <IoLocationOutline className="text-gray-500" />
          <p className="text-xs ml-2 text-gray-500">Location -</p>
          <p className="text-xs font-semibold ml-1 text-gray-600">Mumbai</p>
          <IoIosArrowDown className="ml-1 text-gray-500" />
        </div>
      </div>
      <hr className="w-full mt-4 bg-gray-600" />

      {/*Cart Items */}
      <div className="flex flex-row items-center mt-4">
        <div className="flex flex-grow">
          <p className="ml-4 text-sm text-gray-500">
            Free Native M2 installation
          </p>
        </div>

        <div className="flex flex-row border rounded-lg bg-orange-100 border-orange-300">
          <p className="p-1 mx-1 text-orange-500">-</p>
          <p className="p-1 mx-1 text-orange-500">1</p>
          <p className="p-1 mx-1 text-orange-500">+</p>
        </div>

        <div className="flex flex-col items-center ml-6 mr-4">
          <p className="text-xs text-gray-500">₹0</p>
          <p className="line-through text-xs text-gray-500">₹800</p>
        </div>
      </div>

      <div className="flex flex-row items-center mt-8">
        <div className="flex flex-grow">
          <p className="ml-4 text-sm text-gray-500">Native M2</p>
        </div>

        <div className="flex flex-row border rounded-lg bg-orange-100 border-orange-300 ml-2">
          <p className="p-1 mx-1 text-orange-500">-</p>
          <p className="p-1 mx-1 text-orange-500">1</p>
          <p className="p-1 mx-1 text-orange-500">+</p>
        </div>

        <div className="flex flex-col items-center ml-6 mr-4">
          <p className="text-xs text-gray-500">₹17,499</p>
          <p className="line-through text-xs text-gray-500">₹24,999</p>
        </div>
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full mt-8 p-1" />

      {/*Coupons and Offers */}
      <div className="flex flex-row items-center justify-between ml-4 py-4">
        <div className=" flex flex row items-center">
          <CiDiscount1 className="text-2xl" />
          <p className="ml-3 text-sm text-gray-700 font-semibold">Do you have a coupon?</p>
        </div>

        <IoIosArrowForward className="mr-4 text-xl text-gray-600" />
      </div>

      {/*break bar */}
      <hr className="bg-gray-100 w-full p-1" />

      {/*Payment Summary */}

      <h1 className="flex ml-4 my-4 text-xl font-semibold text-gray-500 items-center justify-start">Payment Summary</h1>


    </div>
  );
};

export default Cart;
