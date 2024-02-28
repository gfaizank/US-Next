"use client";

import { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';
import Link from "next/link"; 
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";


const Page = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [checkSnack, setCheckSnack]=useState(false);

  let email = "";
  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  }
  const router = useRouter();

  const [name, setName]=useState("")
  const [phone, setPhone]=useState("")
  const [date, setDate]=useState("")
  const [address, setAddress]=useState("")

  if (typeof window !== 'undefined') {
  const order = {
    name: name,
    phone: phone,
    date: date,
    address: address,
    cartItems: cartItems
  };


  const orderString = JSON.stringify(order);
  localStorage.setItem("order", orderString);
  let retrievedOrderString =""
  if(typeof window !== "undefined"){
  retrievedOrderString = localStorage.getItem("order");
  const retrievedOrder = JSON.parse(retrievedOrderString);
  
  
  console.log(retrievedOrder);
  }
}
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`https://urban-space-backend.onrender.com/client/${email}/incartservices`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCartItems(data);  
        } else {
          console.error('Failed to fetch cart items');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchCartItems();
  }, [email]);
  
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleCloseCheckSnack = () => {
    setCheckSnack(false);
  }

  useEffect(() => {
    if (snackbarOpen) {
      setTimeout(() => {
        setSnackbarOpen(false);
      }, 5000);
    }
  }, [snackbarOpen]);


  const handlePayment = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
  if (!name || !phone || !email || !date || !address || cartItems.length === 0) {
    console.log('Please fill in all the required fields before proceeding with the payment.');
    setCheckSnack(true)
    return;
  }


    const userOrder = {
      name,
      phone,
      email,
      date,
      address,
      cartItems,
    };

    try {
      const response = await fetch(
        'https://urban-space-backend.onrender.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(userOrder),
        }
      );

      if (response.ok) {
        console.log('Order submitted successfully');
        router.push('/success');
      } else {
        console.error('Failed to submit order:', response.statusText);
      }
    } catch (error) {
      console.error('Error during order submission:', error);
    }
  };

  //   useEffect(() => {
  //       alert("Wohoo!! You are just one step away from completing your booking :)");
  //   }, []);

  return (
    <div className="min-h-screen bg-white">
        {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed (in milliseconds)
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Wohoo!! You are just one step away from completing your booking :)
        </Alert>
      </Snackbar>



      {/* CheckSnack */}
      <Snackbar
        open={checkSnack}
        autoHideDuration={2000} // Adjust the duration as needed (in milliseconds)
        onClose={handleCloseCheckSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseCheckSnack} severity="warning">
        Please fill in all the required fields before proceeding with the payment 
        </Alert>
      </Snackbar>


      {/* Nvabar */}

      <div className=" flex flex-row justify-between">
        <div className="flex flex-row mt-4 items-center">
        
            <FaArrowLeft className="ml-4 text-lg text-gray-500" onClick={()=>{router.back()}} />
        
          <h1 className="ml-6 text-lg text-gray-500 font-semibold">Add Address</h1>
        </div>

      </div>
      <hr className="w-full mt-4 bg-gray-600" />

      <form class="max-w-md mx-auto p-4">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#bca46c] peer"
              placeholder=" "
              required
              onChange={(e)=>{setName(e.target.value)}}
            />
            <label
              htmlFor="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#bca46c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#bca46c] peer"
              placeholder=" "
              required
              onChange={(e)=>{setPhone(e.target.value)}}
            />
            <label
              htmlFor="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#bca46c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#bca46c] peer"
            placeholder=" "
            value={email}
            readOnly
          />
          <label
            htmlFor="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#bca46c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="repeat_password"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#bca46c] peer"
            placeholder=" "
            required
            onChange={(e)=>{setDate(e.target.value)}}
          />
          <label
            htmlFor="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#bca46c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Preferred Date & Time (Optional)
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#bca46c] peer"
            placeholder=" "
            required
            onChange={(e)=>{setAddress(e.target.value)}}
          />
          <label
            htmlFor="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#bca46c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Street Address
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group mx-auto">
            <label
              htmlFor="countries"
              class="block mb-2 text-sm font-medium text-gray-500"
            >
              Locality
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-[#bca46c] focus:border-[#bca46c] block w-full p-2.5 "
            >
                {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#bca46c] dark:focus:border-[#bca46c] */}
              <option>Kharghar</option>
            </select>
          </div>

        <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group mx-auto">
            <label
              htmlFor="countries"
              class="block mb-2 text-sm font-medium text-gray-500"
            >
              City
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-[#bca46c] focus:border-[#bca46c] block w-full p-2.5 "
            >
                {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#bca46c] dark:focus:border-[#bca46c] */}
              <option>Navi Mumbai</option>
            </select>
          </div>

          {/* relative z-0 w-full mb-5 group */}

          <div class="relative z-0 w-full mb-5 group mx-auto">
            <label
              htmlFor="countries"
              class="block mb-2 text-sm font-medium text-gray-500"
            >
              Country
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-[#bca46c] focus:border-[#bca46c] block w-full p-2.5 "
            >
                {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#bca46c] dark:focus:border-[#bca46c] */}
              <option>India</option>
            </select>
          </div>
        </div>
         <button
          type="submit"
          onClick={handlePayment}
          class="text-white bg-[#bca46c] hover:bg-[#bca46c] focus:ring-4 focus:outline-none focus:ring-[#bca46c] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#bca46c] dark:hover:bg-[#bca46c] dark:focus:ring-[#bca46c]"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Page;
