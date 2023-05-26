import Users from "../../components/Users"
import NavBar from "@/components/NavBar"

export async function PageUser(){
    const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8", {
        cache: "no-store"
    })
    return res.json()
}
export default async function User(){
    const users = await PageUser()
    return(
        <>
        <NavBar/>
        
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Our User</span></h1>

        <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-4 my-24">
            
      { 
      
        users.map((user) => (
        <Users
        key={user.id}
            name={user.name}
            image={user.avatar}
            description={user.email}
           id={user.id}
        />
        ))
        }
        </main>
        </>
    )
}