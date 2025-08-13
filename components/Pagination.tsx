"use client"

import { useState, useMemo} from "react";
import Link from "next/link";
import Image from 'next/image';

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

type Props = {
  products: Product[];  
};
export default function Pagination({products}: Props){

    const[page, setPage] = useState(1);
    const itemsPerPage = 8;

    


  
    const totalPages =  Math.ceil(products.length / itemsPerPage)


    const current = useMemo(() => {
        const start = (page - 1) * itemsPerPage;
        return products.slice(start, start + itemsPerPage)
    }, [page])

    const handlePrev =() => setPage(p => Math.max(1, p - 1));
    const handleNext = () => setPage(p => Math.min(totalPages, p + 1))

    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className = 'container  p-4 text-center'> 
            <ul className = 'grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {current.map((product) =>
                    <li key = {product.id} className="bg-white  rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col" >
                        <Image src = {product.image} alt = {product.title} width = {200} height= {250} className="w-full h-48 object-contain mb-4"/>
                        <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">{product.title}</h2>
                        <p className="text-sm text-gray-600 line-clamp-3 mb-2 text-center">{product.description}</p>
                        <p className="text-center text-green-600 font-bold text-xl mb-2">{product.price} $</p>
                        
                        <p className="text-xs text-gray-500 italic mb-2 text-center"> 📦  {product.category}</p>
                        <p className="mt-auto text-sm text-yellow-600 font-medium text-center">
                            ⭐ {product.rating.rate} ({product.rating.count})
                        </p>
                        <Link href = {`/product/${product.id}`} className="text-center text-green-900">View more...</Link>
                    </li>
                )}
            </ul>
            <div className="text-center p-8">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className={`px-3 py-1 rounded font-bold m-1 text-gray-800 ${
                        page === 1 ? "bg-gray-200 opacity-50 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                    Prev
                </button>

                {pageNumbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => setPage(num)}
                        className={`px-3 py-1 text-gray-800 rounded m-1 ${
                        num === page
                            ? "bg-gray-800 text-white font-bold"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={handleNext}
                    disabled={page === pageNumbers.length}
                    className={`px-3 py-1 rounded font-bold m-1 text-gray-800 ${
                        page === pageNumbers.length
                        ? "bg-gray-200 opacity-50 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                >
                    Next
                </button>     
            </div>
        </div>
        )
}