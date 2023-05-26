import Users from "../../components/Users"
import Categories from "../../components/Categories"

export async function PageCateg(){
    const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
        cache: "no-store"
    })
    return res.json()
}
export default async function Categ(){
    const categ = await PageCateg()
    return(
       <>
       <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Our Categories</span></h1>
        <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-4 my-24">
      { 
      
        categ.map((categories) => (
        <Categories
        key={categories.id}
            name={categories.name}
            image={categories.image}
            id={categories.id}
        />
        ))
        }
        </main>
        </>
    )
}