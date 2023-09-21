"use client";
import { useEffect, useState } from "react";
import { fetchCategoryProducts } from "../dummyjson/fetch-category-products";
import { Product } from "../types/product-type";
import Image from "next/image";
import NumberofItems from "./Number-of-Items";
import AddtoCart from "./AddToCart-Button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

type Props = {
  productInfo: Product;
};
function Recommended({ productInfo }: Props) {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    async function getProducts() {
      const products: Product[] = await fetchCategoryProducts(
        productInfo.category
      );
      setProducts(products);
    }
    getProducts();
  }, []);

  return (
    <div className="  pt-4">
      <h3 className=" font-bold"> Recommended Products</h3>
      <div className=" bg-white rounded-lg p-4 text-sm space-y-3 mt-4">
        {products
          ?.filter((product) => product.id !== productInfo.id)
          .map((product) => (
            <div className=" flex space-x-6  items-center">
              <div>
                <Image
                  src={product.thumbnail}
                  alt="product image"
                  width={100}
                  height={100}
                  className=" h-[70px] w-20 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className=" font-bold">{product.title}</p>
                <div className=" flex space-x-8">
                  <NumberofItems />
                  <div className=" w-[50px] h-[40px] flex justify-center group/cart hover:bg-white bg-blue-500 border transition-all ease-linear duration-200 border-blue-500 rounded-lg  ">
                    <ShoppingBagIcon className=" w-6  text-white  group-hover/cart:text-blue-500 transition-all ease-linear duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Recommended;
