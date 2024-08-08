import LoadingSkeleton from "../../../../components/Loading-Skeleton";
import ProductsHeader from "../../../../components/ProductsHeader";
import { getAllProducts } from "../../../../dummyjson/allproducts";
import { Product } from "../../../../types/product-type";
import ProductContainer from "../../../../utils/ProductContainer";

type Props = {};
async function AllProducts({}: Props) {
  const products: Product[] = await getAllProducts();

  return (
    <div>
      <div className=" mt-20 flex flex-wrap justify-center  lg:w-[1200px] m-auto ">
        {products?.map((product) => (
          <ProductContainer product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default AllProducts;
