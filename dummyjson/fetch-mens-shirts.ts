import axios from "axios"
import { Product } from "../types/product-type"
export async function fetchMensShirts() {
    const {data}= await axios.get("https://dummyjson.com/products/category/mens-shirts")
    return (data.products)
    }