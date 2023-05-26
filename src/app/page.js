import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import styles from './page.module.css'
import Products from './products/page'
import User from './users/page'
import Categ from './categories/page'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
    <NavBar/>
    <main className={styles.main}>
      <Suspense fallback={<Loading/>}>
      <Products/>
     
      <Categ/>
      
      <User/>
      
      </Suspense>
    </main>
    <Footer/>
    </>
  )
}
