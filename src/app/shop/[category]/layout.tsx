import { Metadata } from "next";
import ProductsHeader from "../../../../components/ProductsHeader";
import axios from "axios";

export async function generateMetadata({ params }: Props) {
 
    return {
      title: params.category.toUpperCase(),
      description: 'WoodStock your all in one  e-commerce platform'
    };
  }

  
type Props = {
    children: React.ReactNode;
    params: {category: string};

}
export default function Products({children, params}:Props){
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <ProductsHeader params={params.category} />
      {children}
    </section>
  )}