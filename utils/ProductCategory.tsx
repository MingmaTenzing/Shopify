import Image, { StaticImageData } from "next/image"
import Shopbutton from "./ShopButton"

type Props = {
    img:StaticImageData;
    title:string;
    description:string;
    shopTitle:string;
}
function ProductCategory({img,title,description, shopTitle}: Props) {
  return (
    <>
          <div className=" relative  min-w-[316px] min-h-[395px] md:w-1/2 lg:w-[auto]  h-[395px]">
        <Image
          src={img}
          alt="product categories"
          className=" w-full h-full object-cover"
        />
        <div className="  p-4 space-y-3 flex flex-col items-end absolute right-0 top-0">
          <p className=" text-2xl font-semibold  "> {title}</p>
          <span className=" w-20 h-1 bg-black"></span>
          <p className=" text-end">{description}</p>
        </div>
        <div  className=" p-4 absolute bottom-0 right-0">
          <Shopbutton title={shopTitle} />
        </div>
      </div>
    </>
  )
}
export default ProductCategory