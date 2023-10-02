'use client'
import { Bars3Icon, ChevronRightIcon, MagnifyingGlassIcon, MicrophoneIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import { useState, FormEvent } from "react";
import logo from "@/../assests/logo.webp"
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeCartModalState } from "../../redux/slices/CartModal";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import twitter from "../../assests/socials/twitter.svg"
import facebook from "../../assests/socials/facebook.svg";
import pinterest from "../../assests/socials/pinterest.svg";
import instagram from "../../assests/socials/instagram.svg";
type Props = {}
function SmallNav({}: Props) {
    const [isModalOpen, setisModalOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.cart);
    const [searchModal, setSearchModal]  = useState<boolean>(false);

    function searchproduct(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();
        router.push(`/search/${searchQuery}`)
        
    }
  return (
    <>

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
          <MagnifyingGlassIcon onClick={() => setSearchModal(!searchModal)} className=" w-8" />
          <div onClick={() => dispatch(changeCartModalState())} className=" relative">
                <ShoppingBagIcon className="  cursor-pointer w-8" />
                <span className=" absolute top-0 -right-1 bg-red-500  w-6  text-center text-white rounded-full">{cartItems.length}</span>

                </div>

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
        <AnimatePresence>

{

    searchModal && 
    <motion.div initial={{y:-10}}
    animate={{y:0}}
    exit={{y:-10, opacity:0, transition: {duration:0.2}}} className="  absolute -bottom-12 right-10   w-1/2 md:w-1/3 m-auto">

<form onSubmit={searchproduct} className=" p-3   bg-white shadow-2xl flex justify-between rounded-lg mt-4  border py-2">
    <input onChange={(e) => setSearchQuery(e.target.value)}  className=" text-sm bg-transparent flex-grow outline-none"/>
   <button  type="submit">

   
   </button>
</form>
    </motion.div>
}
        </AnimatePresence>
       
      </div>

      </>

  )
}
export default SmallNav