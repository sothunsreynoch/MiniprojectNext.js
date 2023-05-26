import Card from '../../components/Card'
import Image from 'next/image'
import Link from 'next/link'
import styles from './../page.module.css'
import Footer from '@/components/Footer'
import Category from '../../components/Categories'

export const metadata = {
    title: 'ISTAD - Products',
    description: 'Listing all products',
}


export  function Homepage() {
  return (
    
<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>

  )
}

// create async function to getProducts
async function fetchProducts() {
    const resp = await fetch("https://api.escuelajs.co/api/v1/products?limit=21&offset=0", {
        cache: "no-store"
    })
    return resp.json()

}

 export default async function Products() {
    const products = await fetchProducts()
    return (
        <>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Our Products</span></h1>
        <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3">
      {products.map((product) => (
        <Card
        key={product.id}
            title={product.title}
            image={product.images}
            category={product.category.name}
            price={product.price}
            id={product.id}
        />
    
      ))}
    </main>
  </>
    )
    
}
