import Image from "next/image";
import NumberofItems from "../../utils/Number-of-Items";
import { TrashIcon } from "@heroicons/react/24/outline";
import test from "../../assests/test1.webp"
import { useAppDispatch } from "../../redux/hooks";
import { deletefromCart } from "../../redux/slices/CartItems";
import { CartItem } from "../../types/cartItem-type";
import { useRouter } from "next/navigation";
import { changeCartModalState } from "../../redux/slices/CartModal";
import { Cairo } from "next/font/google";

type Props = {
  cartItem: CartItem
};
function CartModalItem({cartItem}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function viewProduct() {
    dispatch(changeCartModalState())
    router.push(`/product/${cartItem.id}`)
  }
  return (
    <div className=" flex space-x-2 justify-between mt-4 border-b py-3">
      <Image
        onClick={viewProduct}
        src={cartItem.thumbnail}
        alt="product"
        width={60}
        height={60}
        className=" bg-gray-300 cursor-pointer  w-30 h-[60px] object-cover"
      />
      <div className=" flex flex-col space-y-1">
        <span className=" text-[10px] text-gray-400">
          Wooodstock {cartItem.category}
        </span>
        <h4 onClick={viewProduct} className=" cursor-pointer  text-sm font-semibold">
         {cartItem.title}
        </h4>
        <span className=" text-[12px]   text-gray-400">Stock: {cartItem.stock}</span>
        <span className="">${cartItem.price}</span>
      </div>
      <div className=" flex flex-col items-end space-y-3">
        <NumberofItems product={cartItem}/>
        <TrashIcon onClick={() => dispatch(deletefromCart(cartItem))} className=" w-5" />
      </div>
    </div>
  );
}
export default CartModalItem;
