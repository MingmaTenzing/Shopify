"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import bg from "../../../../assests/shop bg.jpg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import CategoriesLineup from "../../../../components/small components/CategoriesLineup";
import { fetchCategoryProducts } from "../../../../dummyjson/fetch-category-products";
import { Product } from "../../../../types/product-type";
import ProductContainer from "../../../../utils/ProductContainer";
import { useEffect, useState } from "react";
import ProductsHeader from "../../../../components/ProductsHeader";
type Props = {};
function Category() {
  const [products, setProducts] = useState<Product[]>();
  const params = useParams().category;

  useEffect(() => {
    async function fetchitems() {
      const products = await fetchCategoryProducts(params);
      setProducts(products);
    }
    fetchitems();
  }, []);
  

  return (
    <div>
   

      {/** PRODUCTS */}
      <div className=" mt-20 flex flex-wrap justify-center  lg:w-[1200px] m-auto ">
        {products?.map((product) => (
          <ProductContainer product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default Category;
