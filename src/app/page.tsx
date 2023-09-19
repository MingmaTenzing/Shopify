import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Collections from "../../components/Collections";
import Featured from "../../components/Featured";
import TopLaptops from "../../components/TopLaptops";
import ProductCategories from "../../components/ProductCategories";
import TopMensShirts from "../../components/TopMensShirts";
import BrandsCarousel from "../../components/BrandsCarousel";
import BrandPromises from "../../components/BrandPromises";
import WoodstockNews from "../../components/WoodstockNews";
import Faqs from "../../components/Faqs";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Collections />
      <Featured />
      <TopLaptops />
      <ProductCategories />
      <TopMensShirts />
      <BrandsCarousel />
      <BrandPromises />
      <WoodstockNews />
      <Faqs />
      <NewsLetter />
    </main>
  );
}
