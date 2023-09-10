import Image from 'next/image'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Collections from '../../components/Collections'
import Featured from '../../components/Featured'

export default function Home() {
  return (
    <main>
      <Nav /> 
      <Header />
      <Collections />
      <Featured />
    </main>
  )
}
