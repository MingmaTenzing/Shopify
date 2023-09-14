import Image from "next/image";
import cellphone from "../assests/categories/phone bg.webp";
import accessories from "../assests/categories/accessories bg.webp";
import clothing from "../assests/categories/clothesbg.jpg";
import watches from "../assests/categories/watches bg.webp";
import Shopbutton from "../utils/ShopButton";
import ProductCategory from "../utils/ProductCategory";
type Props = {};
function ProductCategories({}: Props) {
  return (
    <div className=" my-10 flex overflow-x-scroll  md:flex-wrap  lg:flex lg:flex-nowrap md:w-full xl:justify-center xl:min-w-full   scrollbar-hide ">
      <ProductCategory
        img={cellphone}
        title="Smartphone"
        description="Find the best smartphones for you"
        shopTitle="Shop Smartphones"
      />
      <ProductCategory
        img={accessories}
        title="Accessories"
        description="All the accessories in one place"
        shopTitle="Shop Accessories"
      />
      <ProductCategory
        img={clothing}
        title="Clothing"
        description="Wide Range of Mens and Womens clothing"
        shopTitle="Shop Clothes"
      />
      <ProductCategory
        img={watches}
        title="Watches"
        description="World Class watches only for you"
        shopTitle="Shop Watches"
      />
    </div>
  );
}
export default ProductCategories;
