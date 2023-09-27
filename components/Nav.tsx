"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  MicrophoneIcon,
  ChevronDownIcon,
  TagIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assests/logo.webp";
import twitter from "../assests/socials/twitter.svg";
import facebook from "../assests/socials/facebook.svg";
import pinterest from "../assests/socials/pinterest.svg";
import instagram from "../assests/socials/instagram.svg";
import { useRef } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useHover } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StoreHover from "./small components/StoreHover";
import NavTopSection from "./small components/Nav-top-section";
import CartModal from "./CartModal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeCartModalState } from "../redux/slices/CartModal";

type Props = {};
function Nav({}: Props) {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const watchHover = useRef(null);
  const isHover = useHover(watchHover);
  const accessoriesHover = useRef(null);
  const isAccessoriesHover = useHover(accessoriesHover);
  const storeHover = useRef(null);
  const isStoresHover = useHover(storeHover);
  const { isScrollingUp, isScrollingDown, isScrollingY } = useScrollDirection();
  const [sticktoTop, setSticktoTop] = useState<string>("");
  const router = useRouter();

  const iscartModalOpen = useAppSelector((state) => state.cartModal.values);
  console.log(iscartModalOpen);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isScrollingUp) {
      setSticktoTop(" sticky top-0");
    }
    if (isScrollingDown) {
      setSticktoTop("");
    }
  }, [isScrollingY]);
  return (
    <div
      className={`z-50 ${sticktoTop}  transition-all ease-linear duration-200 relative`}
    >
      {/** NAV BAR FOR SMALL SCREENS */}
      <div className="  p-4 bg-white  z-50 relative  md:px-6 lg:hidden flex justify-between">
        <div className=" flex space-x-6">
          {isModalOpen ? (
            <XMarkIcon
              className=" w-8 cursor-pointer"
              onClick={() => setisModalOpen(!isModalOpen)}
            />
          ) : (
            <Bars3Icon
              className=" w-8 cursor-pointer"
              onClick={() => setisModalOpen(!isModalOpen)}
            />
          )}

          <UserIcon className="w-8" />
        </div>

        <Image
          src={logo}
          alt="logo"
          onClick={() => router.push("/")}
          className=" cursor-pointer w-20"
        />
        <div className=" flex space-x-6">
          <MagnifyingGlassIcon className=" w-8" />
          <ShoppingBagIcon onClick={() => dispatch(changeCartModalState())} className=" w-8" />
        </div>

        {/** MODAL FOR SMALL DEVICES */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { stiffness: 300, type: "spring" } }}
              transition={{ duration: 0.3, ease: "linear" }}
              exit={{ x: -20, opacity: 0 }}
              className=" space-y-5 absolute left-0 top-[72px] bg-white w-[80%] md:w-[300px] p-4 "
            >
              <div className=" flex  flex-col space-y-2">
                <Link href="/shop/allproducts">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>All Products</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
                <Link href="/shop/mens-watches">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>Watch</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
                <Link href="/shop/smartphones">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>Smartphones</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
                <Link href="/shop/laptops">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>Laptops</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
                <Link href="/shop/automotive">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>Accessories</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
                <Link href="/shop/skincare">
                  <div
                    onClick={() => setisModalOpen(false)}
                    className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between"
                  >
                    <p>Skincare</p>
                    <ChevronRightIcon className=" w-4" />
                  </div>
                </Link>
              </div>
              <div className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-between">
                <div className=" flex space-x-3 items-center">
                  <MicrophoneIcon className="w-6" />
                  <div>
                    <p className=" text-[10px] font-light">Customer Support</p>
                    <p>1-800-123-45-67</p>
                  </div>
                </div>
              </div>
              <div className=" bg-gray-100 py-4 px-3 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold flex justify-around">
                <Image src={facebook} alt="socials" className=" w-8" />
                <Image src={pinterest} alt="socials" className=" w-8" />
                <Image src={twitter} alt="socials" className=" w-8" />
                <Image src={instagram} alt="socials" className=" w-8" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
            <div className=" flex w-[400px] h-[70px] bg-slate-100 p-4 rounded-lg">
              <input
                className="  outline-none   flex-grow   bg-slate-100"
                placeholder="Search"
              ></input>
              <MagnifyingGlassIcon className=" w-8 flex " />
            </div>
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
              <div onClick={() => dispatch(changeCartModalState())} className=" flex space-x-2 cursor-pointer items-center">
                <ShoppingBagIcon className=" w-10" />

                <div>
                  <p className=" text-sm text-gray-400">Subtotal</p>
                  <p className=" font-bold">$100</p>
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
        {iscartModalOpen && 
        <motion.div 
        initial={{x:10, opacity:0}}
        animate={{x:0, opacity:1, transition:{duration:0.2, type:"spring"}}}
        exit={{x:10, opacity:0}}>

          <CartModal />
        </motion.div>
        }

        </AnimatePresence>
      </div>
    </div>
  );
}
export default Nav;
