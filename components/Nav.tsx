"use client";
import { TruckIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  MicrophoneIcon,
  ChevronDownIcon,
  TagIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assests/logo.webp";

import { FormEvent, useRef } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useHover } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StoreHover from "./small components/StoreHover";
import NavTopSection from "./small components/Nav-top-section";
import CartModal from "./CartModal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeCartModalState } from "../redux/slices/CartModal";
import SmallNav from "./small components/SmallNav";

type Props = {};
function Nav({}: Props) {
  const [searchQuery, setSearchQuery] = useState<string>();

  const watchHover = useRef(null);
  const isHover = useHover(watchHover);
  const accessoriesHover = useRef(null);
  const isAccessoriesHover = useHover(accessoriesHover);
  const storeHover = useRef(null);
  const isStoresHover = useHover(storeHover);
  const { isScrollingUp, isScrollingDown, isScrollingY } = useScrollDirection();
  const [sticktoTop, setSticktoTop] = useState<string>("");
  const router = useRouter();

  const iscartModalOpen = useAppSelector((state) => state.cartModal.value);
  const cartItems = useAppSelector((state) => state.cart.cart);
  const subTotal = cartItems.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isScrollingUp) {
      setSticktoTop(" sticky top-0");
    }
    if (isScrollingDown) {
      setSticktoTop("");
    }
  }, [isScrollingY]);

  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
  }
  return (
    <div
      className={`z-50 ${sticktoTop}  transition-all ease-linear duration-200 relative  `}
    >
      {/** NAV BAR FOR SMALL SCREENS */}
      <SmallNav />

      {/*  Nav bar for large Screen */}

      <NavTopSection />
      <div className="  bg-white  hidden  lg:inline-block w-full p-10    ">
        <div className=" flex justify-between items-center   ">
          <div>
            <Image
              src={logo}
              alt="logo"
              onClick={() => router.push("/")}
              className="  cursor-pointer w-20"
            />
          </div>
          <div className=" flex  space-x-4">
            <form
              onSubmit={search}
              className=" flex w-[400px] h-[70px] bg-slate-100 p-4 rounded-lg"
            >
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="  outline-none   flex-grow   bg-slate-100"
                placeholder="Search"
              ></input>
              <button type="submit">
                <MagnifyingGlassIcon className=" w-8 flex " />
              </button>
            </form>
            <div className="bg-slate-100  space-x-2 w-[240px]  rounded-lg  flex justify-center items-center p-2 ">
              <div>
                <MicrophoneIcon className="w-8 text-gray-500" />{" "}
              </div>

              <div className=" text-sm">
                <p className=" text-gray-400">Customer Support</p>
                <p className=" font-semibold">1-800-123-45-67</p>
              </div>
            </div>
            <div className=" flex space-x-6">
              <UserIcon className=" w-10" />
              <div
                onClick={() => dispatch(changeCartModalState())}
                className=" flex space-x-3 cursor-pointer items-center"
              >
                <div className=" relative">
                  <ShoppingBagIcon className=" cursor-pointer w-10" />
                  <span className=" absolute top-0 -right-1 bg-red-500  w-6  text-center text-white rounded-full">
                    {cartItems.length}
                  </span>
                </div>

                <div>
                  <p className=" text-sm text-gray-400">Subtotal</p>
                  <p className=" font-bold">${subTotal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** NAV SECOND LINE  large screen*/}
        <div className="  pt-10 flex justify-between">
          <div className=" flex space-x-10">
            <div
              ref={storeHover}
              className="flex  relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Stores
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/*** OPTIONS ON HOVER */}
              {/**STORES DROPDOWN MENU */}
              <AnimatePresence>
                {isStoresHover && <StoreHover />}
              </AnimatePresence>
              {/****   end of stored dropdown menu  */}
            </div>

            <div
              ref={watchHover}
              className="flex relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Watch
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/** HOVER OPTIONS */}
              <AnimatePresence>
                {isHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className=" bg-white absolute z-20 -bottom-[154px] -right-14    space-y-3   rounded-lg  w-[180px] p-6  "
                  >
                    <div className="group/category">
                      <p>Men&apos;s Watch</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>

                    <div className="group/category">
                      <p>Women&apos;s Watch</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Smartphones
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div
              ref={accessoriesHover}
              className="flex relative space-x-2 items-center group  cursor-pointer"
            >
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Accessories
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
              {/** HOVER OPTIONS */}
              <AnimatePresence>
                {isAccessoriesHover && (
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className=" bg-white absolute -bottom-[154px] z-20 -right-14    space-y-3   rounded-lg  w-[180px] p-6  "
                  >
                    <div className="group/category">
                      <p>Automotive</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>

                    <div className="group/category">
                      <p>Motorcycle</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                    <div className="group/category">
                      <p>Lightning</p>
                      <div className=" w-0 h-[1px] group-hover/category:w-full transition-all ease-linear  duration-200 bg-black"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Laptops
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
            <div className="flex space-x-2 items-center group  cursor-pointer">
              <p className=" font-semibold hover:underline transition ease-linear duration-150">
                Support
              </p>
              <ChevronDownIcon className=" w-6 group-hover:rotate-180 transition-all ease-linear duration-200 " />
            </div>
          </div>

          {/** ALL SALES AND SHIPPING  section */}
          <div className=" flex space-x-4">
            <div className=" flex items-center  space-x-2 text-gray-600">
              <TagIcon className=" w-6" />
              <p>All Sales</p>
            </div>
            <div className=" flex  items-center space-x-2 text-gray-600">
              <TruckIcon className=" w-6" />
              <p>Shipping and Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-0 right-0 z-50">
        <AnimatePresence>
          {iscartModalOpen && (
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              exit={{ x: 10, opacity: 0 }}
            >
              <CartModal />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
export default Nav;
