import { Metadata } from "next";
import { Providers } from "../../../redux/provider";

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'WoodStock your all in one  e-commerce platform'
}

export default function AllProducts({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}


      {children}
    
    </section>
  )}