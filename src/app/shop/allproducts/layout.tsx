import { Metadata } from "next";
import ProductsHeader from "../../../../components/ProductsHeader";

export const metadata: Metadata = {
  title: 'All Products',
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
      <ProductsHeader params="All Products" />
      {children}
    </section>
  )}