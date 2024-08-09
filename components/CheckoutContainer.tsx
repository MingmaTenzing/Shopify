"use client";

import { LockClosedIcon, MinusIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon, PlayIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ClipLoader } from "react-spinners";

type Props = {};

function CheckoutContainer({}: Props) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [isCalculateClicked, setCalculateClicked] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.cart);

  const subTotal = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const variants = {
    rotate: {
      rotate: 90,
    },
    stop: {
      rotate: 0,
    },
  };

  const proccedtoCheckout = async () => {
    setIsCheckingOut(true);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

    if (!stripe) {
      return;
    }
    try {
      const response = await axios.post("/api/checkout", {
        items: cartItems,
      });
      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  overflow-hidden">
      {" "}
      <section id="subtotanpml " className="flex flex-col -space-y-2 ">
        <div className=" flex flex-nowrap -space-x-2">
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />

          <PlayIcon className=" text-[#f8f8f8] w-10 -rotate-90" />
        </div>
        <div className=" bg-[#f8f8f8] p-8 space-y-6">
          <p className=" font-bold text-3xl">Cart Totals</p>
          <div className=" w-full h-1 bg-gray-200 opacity-60" />
          <section
            id="SHIPPING CALCULATOR SECTION"
            className=" bg-white p-4 rounded-lg space-y-6"
          >
            <div className=" pb-4   flex justify-between items-center">
              <p className="font-[500]">Shipping Calculator</p>
              <div
                onClick={() => setClicked(!clicked)}
                className=" w-8   group p-2 bg-[#242424] transition-all  ease-linear duration-200   text-white rounded-lg relative  shadow-lg"
              >
                <MinusIcon className="w-4  " />
                <motion.div
                  variants={variants}
                  animate={clicked ? "stop" : "rotate"}
                  className="  absolute    top-2  z-20 "
                >
                  <MinusIcon className=" w-4  " />
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {clicked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 2, type: "spring", ease: "linear" },
                  }}
                  exit={{
                    opacity: 1,
                    transition: { duration: 0.2, ease: "linear" },
                  }}
                  className=" space-y-6"
                >
                  <div className=" flex flex-col space-y-2">
                    <label className=" uppercase font-semibold">
                      Country/Region
                    </label>
                    <select className=" bg-[#f8f8f8] border rounded-lg h-14 outline-none">
                      <option className="" value="country">
                        Australia
                      </option>
                      <option value="country">United States</option>
                      <option value="country">Canada</option>
                      <option value="country">Nepal</option>
                    </select>{" "}
                  </div>
                  <div className=" flex flex-col space-y-2">
                    <p className=" font-semibold uppercase">postal/zip code</p>
                    <input
                      type="number"
                      maxLength={10}
                      className=" bg-[#f8f8f8] h-14 outline-none border rounded-lg p-2"
                    ></input>
                  </div>
                  <div>
                    <button
                      onClick={() => setCalculateClicked(true)}
                      className=" px-4 py-2 border rounded-lg text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-all ease-linear duration-200"
                    >
                      Calculate
                    </button>
                  </div>
                  <AnimatePresence>
                    {isCalculateClicked && (
                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        exit={{ y: 20 }}
                        className=" space-y-3"
                      >
                        <div className=" flex space-x-2 bg-green-100 p-4 rounded-lg">
                          <CheckBadgeIcon className=" text-green-500 w-6" />
                          <p className=" text-green-500">
                            Available shipping carriers
                          </p>
                        </div>
                        <p className=" text-sm text-gray-500">
                          Standard: $30.55
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <div>
            <div className=" flex justify-between">
              <span className=" font-bold text-xl">Subtotal</span>
              <span className=" text-xl">${subTotal}</span>
            </div>
            <p className=" text-[12px] text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
          </div>

          {isCheckingOut ? (
            <div className=" flex justify-center items-center bg-blue-500 w-[143px] h-[56px] rounded-lg">
              <ClipLoader color="#ffffff" />
            </div>
          ) : (
            <>
              {" "}
              <button
                onClick={proccedtoCheckout}
                className=" flex hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all ease-linear duration-200 cursor-pointer bg-blue-500 text-white p-4 rounded-lg justify-center space-x-2 items-center"
              >
                <LockClosedIcon className=" font-bold w-6" />

                <span className=" font-semibold">Check out</span>
              </button>
            </>
          )}
        </div>
      </section>
      <div className=" flex flex-nowrap -space-x-2 -mt-2">
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />

        <PlayIcon className=" text-[#f8f8f8] w-10  rotate-90" />
      </div>
    </div>
  );
}
export default CheckoutContainer;
