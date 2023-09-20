import axios from "axios";
import { Product } from "../types/product-type";

export async function getAllProducts () {
    const {data} = await axios.get("https://dummyjson.com/products")
    return data.products;
}