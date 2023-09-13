import { fetchMensShirts } from "../dummyjson/fetch-mens-shirts"
import { Product } from "../types/product-type"
import ProductContainer from "../utils/ProductContainer";
import tshirtImage from "../assests/categories/best mens tshirts.jpg"
import Image from "next/image";

type Props = {}
async function TopMensShirts({}: Props) {
    const  tshirts:Product[] = await fetchMensShirts();
  console.log(tshirts?.length)
    return (
    <div className=" my-20 ">
         <div className="md:ml-4 md:mb-4 relative lg:p-0 p-4 ">
          <h2 className="uppercase  font-semibold text-5xl text-gray-200">
            {" "}
            top Clothes{" "}
          </h2>
          <p className=" uppercase text-lg absolute top-10 lg:top-6">Woodstock Choice</p>
        </div>
        <div className=" space-y-4 md:space-y-0 md:flex md:space-x-3">

        <div className=" lg:hidden md:pl-4 flex flex-wrap md:flex-nowrap justify-center  ">
            { tshirts && tshirts.slice(0,2).map((tshirt) => <ProductContainer key={tshirt.id} product={tshirt} /> )}

        </div>
        <div className=" hidden lg:flex md:pl-4  flex-wrap md:flex-nowrap justify-center  ">
            { tshirts && tshirts.slice(0,4).map((tshirt) => <ProductContainer key={tshirt.id} product={tshirt} /> )}

        </div>

        <div>
            <Image src={tshirtImage} alt='clothing product' className="  md:h-[450px] object-cover" />
        </div>
        </div>
    </div>
  )
}
export default TopMensShirts