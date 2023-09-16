import Image from "next/image";
import logo from "../assests/logo.webp";
import { HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";

type Props = {};
function Footer({}: Props) {
  return (
    <div className=" mt-8 p-4 md:p-10 lg:w-[1200px] m-auto text-sm space-y-6 md:space-y-0 md:flex  md:justify-between ">
      {/** CONTACT INFO */}
      <div className=" space-y-3">
        <Image src={logo} alt="logo image" className=" w-20" />
        <p className=" font-semibold">Contact Info</p>
        <div className=" space-y-2">
          <div className=" space-x-2 flex items-center ">
            <HomeIcon className=" w-6" />
            <p>78 2nd House RD Montauk, NY, 11954 </p>
          </div>
          <div className=" space-x-2 flex items-center ">
            <PhoneIcon className=" w-6" />
            <p>Or call 1-800-123-45-67 </p>
          </div>
        </div>
      </div>
      {/*** END OF CONTACT INFO */}
      {/** COMPANY */}
      <div className=" space-y-3">
        <h3 className=" font-semibold">Company</h3>
        <div className=" space-y-2">
          <p>Our story</p>
          <p>Career Opportunities</p>
          <p>Newsroom</p>
          <p>Contact Woodstock</p>
        </div>
      </div>
      {/** /end of company */}
      <div className=" space-y-3">
        <h3 className=" font-semibold">Find It Fast</h3>
        <div className=" space-y-2">
          <p>Computer & Tablet</p>
          <p>Smartphones & Accessories</p>
          <p>Audio & Video</p>
          <p>Cameras, Camcorders </p>
        </div>
      </div>
      <div className=" space-y-3">
        <h3 className=" font-semibold">Make Money with Us</h3>
        <div className=" space-y-2">
          <p>Sell on Woodstock</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Become an Woodstock Vendor </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
