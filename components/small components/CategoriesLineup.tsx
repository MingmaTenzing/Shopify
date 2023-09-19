'use client'
import { BeakerIcon, BookmarkSquareIcon, BuildingStorefrontIcon, ChevronRightIcon, ClockIcon, CogIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, HomeIcon, PaperAirplaneIcon, PhoneIcon, ShoppingBagIcon, SparklesIcon, SpeakerWaveIcon, TagIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type Props = {}
function CategoriesLineup({}: Props) {
  const router = useRouter();
  return (
    <div>        <div className="  px-4 flex space-x-12 w-[80%] lg:w-[1000px] h-[100px]  overflow-x-scroll  scrollbar-hide bg-white rounded-lg shadow-lg  absolute bottom-0 translate-y-1/2  left-1/2  -translate-x-1/2">
    <div onClick={() => router.push("/shop/smartphones")} className=" space-x-1  flex items-center cursor-pointer">
     <DevicePhoneMobileIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Smartphones</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div onClick={() => router.push("/shop/laptops")} className=" space-x-1 flex items-center cursor-pointer">
     <ComputerDesktopIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Laptops & Computers</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div onClick={() => router.push("/shop/automotive")} className=" space-x-1 flex items-center cursor-pointer">
     <SpeakerWaveIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Accessories</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div onClick={() => router.push("/shop/skincare")}  className=" space-x-1 flex items-center cursor-pointer">
     <BeakerIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Skincare</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/mens-shirts")} className=" space-x-1 flex items-center cursor-pointer">
     <BookmarkSquareIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Mens Clothing</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/womens-dresses")} className=" space-x-1 flex items-center cursor-pointer">
     <TagIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Womens Clothing</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/mens-watches")} className=" space-x-1 flex items-center cursor-pointer">
     <CogIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Mens Watches</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/mens-shoes")} className=" space-x-1 flex items-center cursor-pointer">
     <PaperAirplaneIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Mens Shoes</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/womens-watches")} className=" space-x-1 flex items-center cursor-pointer">
     <ClockIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Womens Watches</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/womens-watches")} className=" space-x-1 flex items-center cursor-pointer">
     <ShoppingBagIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Womens Bags</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/Furniture")} className=" space-x-1 flex items-center cursor-pointer">
     <HomeIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Furniture</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/groceries")} className=" space-x-1 flex items-center cursor-pointer">
     <BuildingStorefrontIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Groceries</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
    <div  onClick={() => router.push("/shop/womens-jewellery")} className=" space-x-1 flex items-center cursor-pointer">
     <SparklesIcon className=" w-10" />
     <div className=" space-y-0">
       <p className=" font-semibold">Womens Jewellery</p>
       <p className=" font-light text-gray-500  text-[12px]">5 products</p>

     </div>
    </div>
     
   </div></div>
  )
}
export default CategoriesLineup