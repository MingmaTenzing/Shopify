import Image from 'next/image'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Collections from '../../components/Collections'
import Featured from '../../components/Featured'
import TopLaptops from '../../components/TopLaptops'
import ProductCategories from '../../components/ProductCategories'
import TopMensShirts from '../../components/TopMensShirts'
import BrandsCarousel from '../../components/BrandsCarousel'
import BrandPromises from '../../components/BrandPromises'
import WoodstockNews from '../../components/WoodstockNews'

export default function Home() {
  return (
    <main>
      <Nav /> 
      <Header />
      <Collections />
      <Featured />
     <TopLaptops />
     <ProductCategories />
     <TopMensShirts />
     <BrandsCarousel />
     <BrandPromises />
     <WoodstockNews />
    </main>
  )
}
