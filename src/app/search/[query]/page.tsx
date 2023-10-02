'use client'
import axios from "axios";
import { Product } from "../../../../types/product-type";
import ProductContainer from "../../../../utils/ProductContainer";
import { useEffect, useState } from "react";
import { get } from "http";
import Image from "next/image";
import sadEmoji from "../../../../assests/icons8-sad-64.png"

type Props = {
  params: { query: string };
};
async function getSearchProducts(query: string) {
  const { data } = await axios.get(
    `https://dummyjson.com/products/search?q=${query}`
  );
  return data.products;
}

async function Search({ params }: Props) {
    const [searchNotFound, setsearchNotfound]  = useState<boolean>(false)
const[searchResult, setSearchResult] = useState<Product[]>();


 useEffect(() => {
    async function getData() {
        
        const searchItems: Product[] = await getSearchProducts(params.query);
        if (searchItems.length === 0) {
            setsearchNotfound(true)
        }
        else {
            setSearchResult(searchItems)
        }
    }
    getData();

 }, [])
  return (
    <div>
      {/** PRODUCTS */}
      <div className=" mt-20 flex flex-wrap justify-center  lg:w-[1200px] m-auto ">
       
       {
        searchNotFound ? (<> 
        <div className=" h-[300px] flex space-x-2 justify-center items-center font-bold text-3xl ">
            <Image src={sadEmoji} alt="emoji" width={40} />
            <p>
            Search Results Cannot be found
                </p>
                </div>
        </>):(<> {searchResult?.map((product) => (
            <ProductContainer product={product} key={product.id} />
          ))}</>)
       }
        
      </div>
    </div>
  );
}
export default Search;
