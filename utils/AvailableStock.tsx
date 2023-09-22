import { Product } from "../types/product-type";

type Props = {
  productInfo: Product;
};
function AvailableStock({ productInfo }: Props) {
  return (
    <div className=" bg-white rounded-lg p-4 text-sm space-y-3">
      <div className=" flex space-x-2">
        <p className=" text-gray-600">Availability: </p>
        <span className=" font-[500]">{productInfo.stock} in stock</span>
      </div>
      <div className=" flex space-x-2">
        <p className=" text-gray-600">SKU: </p>
        <span className=" font-[500]">SACwSB-B1-{productInfo.discountPercentage}-{productInfo.id}</span>
      </div>
      <div className=" flex space-x-2">
        <p className=" text-gray-600">Collections: </p>
        <span className=" font-[500]">Store, WoodStock {productInfo.category}, {productInfo.brand}</span>
      </div>
    </div>
  );
}
export default AvailableStock;
