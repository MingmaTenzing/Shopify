import axios from "axios";

export async function fetchProductInfo(productId: string | string[]) {
  const { data } = await axios.get(
    `https://dummyjson.com/product/${productId}`
  );
  return data
}
