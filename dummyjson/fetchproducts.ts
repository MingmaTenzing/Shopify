import axios from "axios";

export async function fetchProducts(category: string | string[]) {

    const {data} = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return data.products;
}