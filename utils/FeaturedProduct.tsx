import { Product } from "../types/product-type"

function FeaturedProduct({rating, thumbnail, title, price, discountPercentage}:Product) {

  return (
    <div>
      <p>{title}</p>
      <p>{rating}</p>
    </div>
  )
}
export default FeaturedProduct