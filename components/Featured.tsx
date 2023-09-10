"use client";
import axios from "axios";
import FeaturedProduct from "../utils/FeaturedProduct";

import { Product } from "../types/product-type";
import { fetchSmartphones } from "../dummyjson/fetchdata";
import { useEffect, useState } from "react";

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
  console.log(smartphones);

  return (
    <div>
      <h2 className=" font-semibold text-3xl lg:text-4xl">Featured Products</h2>
      <div>
        {
          smartphones?.map((device) => <div>{device.title}</div>)
        }
      </div>
    </div>
  );
}
export default Featured;
