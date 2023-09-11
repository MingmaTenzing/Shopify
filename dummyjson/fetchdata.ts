import axios from "axios";
import { Product } from "../types/product-type";

export async function fetchSmartphones() {
const {data} = await axios.get("https://dummyjson.com/products/category/smartphones")
return data.products
}

export async function fetchLaptops() {
    const {data} = await axios.get("https://dummyjson.com/products/category/laptops")
    return data.products;
}