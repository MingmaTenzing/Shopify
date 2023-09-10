"use client";
import axios from "axios";
import FeaturedProduct from "../utils/FeaturedProduct";

import { Product } from "../types/product-type";
import { fetchSmartphones } from "../dummyjson/fetchdata";
import { useEffect, useState } from "react";
import Image from "next/image";
import image from "../assests/test.jpg";
import star from "../assests/rating/star.png"
import halfstar from "../assests/rating/halfstar.png"
type Props = {};
function Featured({}: Props) {
  const [smartphones, setSmartphones] = useState<Product[]>();
  useEffect(() => {
    async function getData() {
      const { products } = await fetchSmartphones();
      setSmartphones(products);
    }
    getData();
  }, []);
  const rating = 4.3;
  
 
  return (
    <div>
      <h2 className=" font-semibold text-3xl lg:text-4xl">Featured Products</h2>
      <div>
        {/*** 
        * 
        * 
        *  {smartphones?.map((device) => (
          <FeaturedProduct
          id={device.id}
          description={device.description}
          stock={device.stock}
          brand={device.brand}
          category={device.category}
          images={device.images}
            key={device.id}
            rating={device.rating}
            thumbnail={device.thumbnail}
            title={device.title}
            price={device.price}
            discountPercentage={device.discountPercentage}
          />
        ))}
        */}
      </div>

      {/**** PRODUCT CONTAINER */}
      <div>
        <div className=" w-[320px] border">
          <Image
            src={image}
            alt="product image"
            width={260}
            height={200}
            className=" w-[240px] h-[200px] object-cover  object-center rounded-lg"
          />
          <p className=" font-bold text-lg">Iphone 9</p>
        </div>
        <div className=" flex">
          { new Array(Math.floor(rating)).fill(0).map(() => <Image src={star} alt="star" className=" w-4 h-4" />)}
       {rating%2 !==0 && <Image src={halfstar} alt="half star" className="  w-4 h-4" />}
        </div>
   
      </div>
    </div>
  );
}
export default Featured;
