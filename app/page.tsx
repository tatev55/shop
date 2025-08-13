import Pagination from "../components/Pagination";


type Product = {
    id : number,
    title : string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
    rate: number;
    count: number;
  };
      
}


type ProductResponse = Product[]

export default async function  HomePage() {
  

  const response =  await fetch('https://fakestoreapi.com/products', {next: {revalidate: 60}});

  if(!response.ok){
    throw new Error('Faild to fetch Products')
  }

  const data: ProductResponse = await response.json();
 
  return (

    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800"> 🛍️ Products</h1>
      <Pagination products = {data}/>
    </div>
    </div>
  );
}


 