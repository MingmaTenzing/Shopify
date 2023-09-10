import Image from 'next/image'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Collections from '../../components/Collections'

export default function Home() {
  return (
    <main>
      <Nav /> 
      <Header />
      <Collections />
    </main>
  )
}
