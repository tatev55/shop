type Params = {
  params: Promise<{ id: string }>
}

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


 async function Product({ params }: Params) {
     const { id } = await params;

     const response = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 60 } });
     if(!response.ok){
        throw new Error("Failed to fetch product")
     }
     const product:Product = await response.json();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center gap-8 shadow-lg p-6 bg-white rounded">
                <img src={product.image} alt={product.title} className="w-60 h-auto object-contain" />
                <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                <p className="text-green-600 font-semibold text-xl">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <p className="italic text-sm text-gray-500">Category: {product.category}</p>
                <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
            </div>
    </div>
    )
}

export default Product