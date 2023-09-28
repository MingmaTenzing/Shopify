'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/product-type";

import { fetchProductInfo } from "../../../../dummyjson/fetchProductInfo";
import Image from "next/image";
import Rating from "../../../../utils/Rating";

import ProductDescription from "../../../../utils/ProductDescription";
import AvailableStock from "../../../../utils/AvailableStock";
import Recommended from "../../../../utils/Recommended";

type Props = {};

function ProductInfo({}: Props) {
  const [productInfo, setProductInfo] = useState<Product>();
  const productId = useParams().productId;
  useEffect(() => {
    const fetchProduct = async () => {
      const data: Product = await fetchProductInfo(productId);
      setProductInfo(data);
    };
    fetchProduct();
  }, []);
  console.log(productInfo);

  return (
    <>

    <div className=" bg-[#fafafa]">

    <div className=" md:pt-10 p-4 md:flex md:space-x-6  md:justify-center md:item md:h-[60vh] lg:h-[90vh] lg:w-[1200px] lg:m-auto ">
      <Swiper
        className=" md:w-[600px]  "
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {productInfo?.images.map((imgsrc) => (
          <SwiperSlide key={productInfo.id}>
            {" "}
            <Image
              src={imgsrc}
              height={300}
              alt="product Image"
              width={300}
              className=" rounded-lg w-full h-[400px] md:h-[500px] md:object-contain  object-cover"
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>

      {/*** PRODUCT INFO section */}
      <div className=" space-y-3 mt-10 md:mt-0 md:overflow-y-scroll  md:scrollbar-hide ">
        <div className=" flex space-x-1">
          <p>By </p>{" "}
          <span className="font-semibold">
            {" "}
            Woodstock {productInfo?.category}
          </span>
        </div>

        <h2 className=" font-bold text-3xl">{productInfo?.title}</h2>
        <div className=" flex space-x-3 items-center">
          {productInfo && <Rating rating={productInfo.rating} />}
          <div className="  px-2 py-1 rounded-lg  bg-gray-200 ">
            <p className="font-semiboldd  text-[12px]">
              {productInfo?.rating}/5.0
            </p>
          </div>
        </div>

        {productInfo && (
          <div className=" flex items-center space-x-3 text-xl ">
            <p className=" ">
              $
              {(
                productInfo?.price -
                (productInfo?.price * productInfo?.discountPercentage) / 100
              ).toFixed(0)}
            </p>
            <p className=" line-through text-gray-400">${productInfo.price}</p>
          </div>
        )}

        {productInfo && 
        <ProductDescription productInfo={productInfo} />
        }
        {
          productInfo && <AvailableStock  productInfo={productInfo} />
        }
        {
          productInfo && <Recommended  productInfo={productInfo} />
        }
        
      
      </div>
    </div>

    </div>
    </>
  );
}
export default ProductInfo;
