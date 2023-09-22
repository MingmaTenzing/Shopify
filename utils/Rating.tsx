import Image from "next/image"
import { Product } from "../types/product-type"
import star from "../assests/rating/star.png";
import halfstar from "../assests/rating/halfstar.png";
type Props = {
    rating: number;
}
function Rating({rating}: Props) {
  return (
    <div>
        <div className=" flex">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <Image key={index} src={star} alt="star" className=" w-4  h-4" />
        ))}
        {rating % 2 !== 0 && (
          <Image src={halfstar} alt="half star" className="  w-4  h-4" />
        )}
      </div>
    </div>
  )
}
export default Rating