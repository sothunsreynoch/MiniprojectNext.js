async function fetchCateories(id){
    const resp = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
    return resp.json()
}
export async function generateMetadata({params}){
    const user = await fetchCateories(params.id)
    return{
        name: user.name,
        thumbnail: user.image,
        metadataBase: new URL('https://istad.co'),
        alternates: {
            canonical: '/',
            languages: {
            'en-US': '/en-US',
            'de-DE': '/de-DE',
            },
        },
        openGraph: {
            images: user.images,
            name: user.name,
           
        },
    }   
    
}

export default async function CategariesDetail({params}){
    const {id} = params
    const user = await fetchCateories(id)
    return(
        
        <main className="flex flex-wrap items-center p-4 justify-around my-24">
 <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={user.image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
    </div>
</a>
</main>


    )
}