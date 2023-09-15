import axios from "axios"
export async function fetchMensShirts() {
    const {data}= await axios.get("https://dummyjson.com/products/category/mens-shirts")
    return (data.products)
    }