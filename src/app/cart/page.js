"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(Date.now());
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  let email = "";
  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  }

  const total = cartItems.reduce((accumulator, service) => {
    return accumulator + service.price;
  }, 0);

  const router = useRouter();

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://urban-space-backend.onrender.com/client/${email}/incartservices`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCartItems(data);
        } else {
          console.error("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchCartItems();
  }, [email, updateTrigger]);

  const removeFromCart = async (service) => {
    try {
      const response = await fetch(
        `https://urban-space-backend.onrender.com/client/${email}/removefromcart`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            service_title: service?.service_title,
          }),
        }
      );

      if (response.ok) {
        console.log("Service removed from cart successfully");
        
        setUpdateTrigger(Date.now());
      } else {
        console.error(
          "Failed to remove service from cart:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-white">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info">
          Service removed from cart!!
        </Alert>
      </Snackbar>

      {/*Navbar Component */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row mt-4 items-center">
          <FaArrowLeft
            className="ml-4 text-lg text-gray-500"
            onClick={() => {
              router.back();
            }}
          />

          <h1 className="ml-6 text-lg text-gray-500 font-semibold">Cart</h1>
        </div>

        <div className="flex flex-row items-center rounded-lg bg-gray-100 mt-4 mr-4 px-1 py-2 border">
          <IoLocationOutline className="text-gray-500" />
          <p className="text-xs ml-2 text-gray-500">Location -</p>
          <p className="text-xs font-semibold ml-1 text-gray-600">
            Navi Mumbai
          </p>
          <IoIosArrowDown className="ml-1 text-gray-500" />
        </div>
      </div>
      <hr className="w-full mt-4 bg-gray-600" />

      {/*Cart Items */}
      {/* <div className="flex flex-row items-center mt-4">
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
      </div> */}

      {cartItems.map((service) => (
        <div key={service.id} className="flex flex-row items-center mt-8">
          <div className="flex flex-grow">
            <p className="ml-4 text-sm text-gray-500">
              {service.service_title}
            </p>
          </div>

          <div className="flex flex-row border rounded-lg bg-orange-100 border-orange-300">
            <p
              className="p-1 mx-1 text-orange-500"
              onClick={() => {
                removeFromCart(service)
                setSnackbarOpen(true);
              }}
            >
              -
            </p>
            <p className="p-1 mx-1 text-orange-500">1</p>
            <p className="p-1 mx-1 text-orange-500">+</p>
          </div>

          <div className="flex flex-col items-center ml-6 mr-4">
            <p className="text-xs text-gray-500">₹{service.price}</p>
            <p className="line-through text-xs text-gray-500">
              ₹{Math.ceil(service.price + 0.25 * service.price)}
            </p>
          </div>
        </div>
      ))}

      {/*break bar */}
      <hr className="bg-gray-100 w-full mt-8 p-1" />

      {/*Coupons and Offers */}
      <div className="flex flex-row items-center justify-between ml-4 py-4">
        <div className=" flex flex-row items-center">
          <CiDiscount1 className="text-2xl text-gray-700" />
          <p className="ml-3 text-sm text-gray-700 font-semibold">
            Do you have a coupon?
          </p>
        </div>

        <IoIosArrowForward className="mr-4 text-xl text-gray-600" />
      </div>

      <hr className="bg-gray-100 w-full p-1" />

      {/*Payment Summary */}

      {/*<h1 className="flex ml-4 my-4 text-xl font-semibold text-gray-500 items-center justify-start">Payment Summary</h1> */}

      <div className="flex flex-col h-80 mt-4 pb-8 rounded-3xl rounded-b-none bg-gray-200">
        <div className="flex text-white bg-[#bca46c] pl-2 py-2 w-28 ml-12 mt-4 text-xs z-10 rounded-md">
          Order Summary
        </div>

        <div className="flex flex-col rounded-lg h-32 -mt-4 mx-6 z-0 bg-white">
          <div className="flex flex-row mt-6 px-4 justify-between">
            <p className="text-sm text-gray-500">Order total</p>
            <p className="text-sm text-gray-500">₹{total}</p>
          </div>

          <div className="flex flex-row mt-3 px-4 justify-between">
            <p className="text-sm text-gray-500">Order discount</p>
            <p className="text-sm text-[#bca46c]">
              -₹{Math.ceil(0.25 * total)}
            </p>
          </div>

          <div className="flex flex-row mt-3 px-4 justify-between">
            <p className="text-sm text-gray-500">Offer discount</p>
            <p className="text-sm text-[#bca46c]">-₹0</p>
          </div>
        </div>

        <div className="flex text-white bg-[#bca46c] pl-2 py-2 w-24 ml-12 mt-2 text-xs z-10 rounded-md">
          Payable Now
        </div>
        <div className="flex flex-col rounded-lg h-20 -mt-4 mx-5 z-0 bg-white">
          <div className="flex flex-row mt-6 px-4 justify-between">
            <p className="text-sm text-gray-500">Final Payable</p>
            <p className="text-sm text-gray-500">₹{total}</p>
          </div>

          <div className="flex flex-row mt-2 px-4 justify-between">
            <p className="text-sm text-gray-500">Taxes</p>
            <p className="text-sm text-gray-500">₹{Math.ceil(0.18 * total)}</p>
          </div>
        </div>
      </div>

      {/* Submit button */}

      <div className="flex flex-col bg-white h-20 -mt-4 w-full border rounded-3xl rounded-b-none ">
        <div className=" bg-[#bca46c] px-6 py-2 -mt-6 mx-8 flex flex-row rounded-md justify-between items-center">
          <div className="flex flex-col">
            <p className="text-sm text-white">
              ₹ {Math.ceil(total + 0.18 * total)}
            </p>
            <p className="text-xs mt-1 text-white">Payable Now</p>
          </div>
          <Link href="/address">
            <h1 className="text-sm text-white">Proceed</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
