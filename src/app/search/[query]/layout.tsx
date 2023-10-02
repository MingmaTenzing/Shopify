
import axios from "axios";
import Collections from "../../../../components/Collections";
import ProductCategories from "../../../../components/ProductCategories";
import Faqs from "../../../../components/Faqs";
import ProductsHeader from "../../../../components/ProductsHeader";

export async function generateMetadata({ params }: Props) {
  return {
      title: params.query,
      description: 'WoodStock your all in one  e-commerce platform'
    };
  }

  
    
type Props = {
    children: React.ReactNode;
    params: {query: string};

}
export default function SearchQuery({children, params}:Props){
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <ProductsHeader params={params.query} />
      {children}
    </section>
  )}