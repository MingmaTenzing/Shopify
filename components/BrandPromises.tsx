import {
  ChatBubbleOvalLeftEllipsisIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

type Props = {};
function BrandPromises({}: Props) {
  return (
    <div className=" my-10 p-4  flex flex-col items-center justify-center space-y-8 md:space-y-0 md:flex-row  md:space-x-6  lg:w-[1200px] m-auto">
      <div className=" flex flex-col items-center space-y-2">
        <TruckIcon className=" w-20 lg:w-32 text-blue-500  bg-slate-100 p-4 rounded-full" />
        <p className=" font-light text-center text-gray-500  text-md">
          Enjoy complimentary free shipping. Take advantage of our free shipping
          offer.
        </p>
      </div>
      <div className=" flex flex-col items-center space-y-2">
        <ChatBubbleOvalLeftEllipsisIcon className=" w-20 lg:w-32 text-blue-500  bg-slate-100 p-4 rounded-full" />
        <p className=" font-light text-center text-gray-500  text-md">
          Contact us 24hrs per day Our customer support team is available 24
          hours a day
        </p>
      </div>
      <div className=" flex flex-col items-center space-y-2">
        <ShieldCheckIcon className=" w-20 lg:w-32 text-blue-500  bg-slate-100 p-4 rounded-full" />
        <p className=" font-light text-center text-gray-500  text-md">
          Payment secure Secure your payment with our trusted payment system
        </p>
      </div>
    </div>
  );
}
export default BrandPromises;
