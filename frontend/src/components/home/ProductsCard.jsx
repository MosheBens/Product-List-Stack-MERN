import React from 'react'
import ProductSingleCard from './ProductSingleCard';


// Component In Charge To Show All The Cards
const ProductsCard = ({products}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((item) => (
            <ProductSingleCard key={item._id} product={item}/>
        ))}
    </div>
  )
}

export default ProductsCard