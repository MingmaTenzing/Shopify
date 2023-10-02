"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import img1 from "../assests/slider/slider1-img.webp";
import img2 from "../assests/slider/slider2-img.webp";
import img3 from "../assests/slider/slider3-img.webp";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
type Props = {};
function Header({}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div>
      <Swiper
        className=" bg-black text-white"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div ref={ref} className=" relative w-full h-[80vh] ">
            <motion.div className=" w-full h-full">
              <Image
                src={img1}
                alt="slide image"
                className="  object-center w-full h-full object-cover "
              />
            </motion.div>
            <div className=" absolute left-10 md:left-20 space-y-4  w-1/2 md:w-1/3  top-[20%] md:top-1/4 -translatex-y-1/2">
              <div className=" rounded-full w-[120px] p-2  text-sm bg-red-400 uppercase">
                {" "}
                new arrivals{" "}
              </div>
              <h3 className=" text-3xl md:text-5xl  font-bold">
                {" "}
                Wireless Sound Revolution
              </h3>
              <p className=" font-semibold">
                Highest quality sound, ergonomic design, and the latest in
                wireless technology
              </p>
              <div className=" overflow-hidden  group transition-all relative ease-linear duration-200 cursor-pointer bg-white text-black w-[200px] h-14 items-center flex justify-center p-2 rounded-lg">
                <div className=" absolute  w-full top-60 group-hover:top-0  h-full bg-black   transition-all ease-linear duration-200   rounded-lg "></div>
                <p className=" group-hover:text-white z-10 transition-all ease-linear  duration-200 font-semibold text-sm">
                  Shop Now - from $45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="  relative w-full h-[80vh] ">
            <Image
              src={img2}
              alt="slide image"
              className="  object-center w-full h-full object-cover "
            />
            <div className="  flex flex-col items-end text-end overflow-visible  absolute right-10 md:right-20 space-y-4  w-1/2 md:w-1/3  top-[20%] md:top-1/4 -translatex-y-1/2">
              <div className=" rounded-full w-[120px] p-2  text-sm  bg-gray-600 uppercase">
                {" "}
                <p className=" text-center">watches</p>
              </div>
              <h3 className=" text-3xl md:text-5xl font-bold">
                {" "}
                Time Meets Technology
              </h3>
              <p className=" font-semibold">
                Navigate your day seamlessly with our innovative smartwatches.
              </p>
              <div className=" overflow-hidden  group transition-all relative ease-linear duration-200 cursor-pointer bg-white text-black w-[200px] h-14 items-center flex justify-center p-2 rounded-lg">
                <div className=" absolute  w-full top-60 group-hover:top-0  h-full bg-black   transition-all ease-linear duration-200   rounded-lg "></div>
                <p className=" group-hover:text-white z-10 transition-all ease-linear  duration-200 font-semibold text-sm">
                  Shop Now - from $45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="  relative w-full h-[80vh] ">
            <Image
              src={img3}
              alt="slide image"
              className="  object-center w-full h-full object-cover "
            />
            <div className=" flex flex-col items-center text-center   overflow-visible   absolute  space-y-4  l   left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2">
              <div className=" rounded-full w-[120px] p-2  text-sm  bg-red-600 uppercase">
                {" "}
                <p className=" text-center">speakers</p>
              </div>
              <h3 className=" text-3xl md:text-5xl font-bold">
                {" "}
                Premium Sound Unleashed
              </h3>
              <p className=" font-semibold">
                Discover breathtaking audio experiences with our premium
                speakers.
              </p>
              <div className=" overflow-hidden  group transition-all relative ease-linear duration-200 cursor-pointer bg-white text-black w-[200px] h-14 items-center flex justify-center p-2 rounded-lg">
                <div className=" absolute  w-full top-60 group-hover:top-0  h-full bg-black   transition-all ease-linear duration-200   rounded-lg "></div>
                <p className=" group-hover:text-white z-10 transition-all ease-linear  duration-200 font-semibold text-sm">
                  Shop Now - from $45.00
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Header;
