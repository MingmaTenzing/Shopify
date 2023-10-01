import Stripe from "stripe";
import { NextResponse } from "next/server";
import { CartItem } from "../../../../types/cartItem-type";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2023-08-16', typescript:true})

const corsHeader = {
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE,OPTIONS",
    "Access-Control-Allow-Headers":"Content"
}

export default function OPTIONS () {
    return NextResponse.json({}, {headers: corsHeader})
}


export async function POST (req:Request) {
    const {items} = await req.json();

    if (!items) {
        return new NextResponse("Products not found", {status: 400})

    }


    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    items.forEach((product:CartItem)=>{
        line_items.push({
            quantity:product.quantity,
            price_data:{
                currency:'AUD',
                product_data:{
                    name:product.title,
                    description: product.description,
                    images: [product.thumbnail],
                },
                unit_amount:product.price * 100
            }
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode:'payment',
        billing_address_collection:'auto',
        phone_number_collection:{
            enabled:false
        },
        success_url: `http://localhost:3000`,
        cancel_url: `http://localhost:3000`,
        
    })

    return NextResponse.json({url:session.url},{headers:corsHeader})






}