import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { CartItem } from "../../../../types/cartItem-type";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});
const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

export async function POST(req: NextRequest, res: NextResponse) {
  const { items } = await req.json();

  if (!items) {
    return new NextResponse("Products not found", { status: 400 });
  }

  items.forEach((product: CartItem) => {
    line_items.push({
      quantity: product.quantity,
      price_data: {
        currency: "AUD",
        product_data: {
          name: product.title,
          description: product.description,
          images: [product.thumbnail],
        },
        unit_amount: product.price * 100,
      },
    });
  });

  if (line_items.length > 0) {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        success_url: process.env.HOST_NAME!,
        cancel_url: process.env.HOST_NAME!,
      });

      return NextResponse.json({ url: session.url });
    } catch (error) {
      console.log(error);
    }
  }
}
