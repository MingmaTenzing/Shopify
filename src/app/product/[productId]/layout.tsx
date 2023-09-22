
import axios from "axios";
import Collections from "../../../../components/Collections";
import ProductCategories from "../../../../components/ProductCategories";
import Faqs from "../../../../components/Faqs";

export async function generateMetadata({ params }: Props) {
    const { data } = await axios.get(
        `https://dummyjson.com/product/${params.productId}`
      );    return {
      title: data.title,
      description: 'WoodStock your all in one  e-commerce platform'
    };
  }

  
    
type Props = {
    children: React.ReactNode;
    params: {productId: string};

}
export default function Products({children, params}:Props){
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
      <Collections />
      <ProductCategories />
      <Faqs />
    </section>
  )}