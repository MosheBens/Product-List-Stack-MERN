import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from 'react-icons/bi';
import {  MdOutlineDelete } from 'react-icons/md';


// Component In Charge Of The Table Structure
const ProductTable = ({products}) => {
      
    return (
        <>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope="col" className="px-6 py-3">NO</th>
                    <th scope="col" className="px-6 py-3">PRODUCT NAME</th>
                    <th scope="col" className="px-6 py-3 max-md:hidden">COLOR</th>
                    <th scope="col" className="px-6 py-3 max-md:hidden">PRICE</th>
                    <th scope="col" className="px-6 py-3 max-md:hidden">URL PRODUCT</th>
                    <th scope="col" className="px-6 py-3">Operations</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,index) => (
                    
                    <tr key={product._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' >
                        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            {index + 1}
                        </td>
                        <td className='px-6 py-4'>
                            {product.productname}
                        </td>
                        <td className='px-6 py-4 max-md:hidden'>
                            {product.color}
                        </td>
                        <td className='px-6 py-4 max-md:hidden'>
                            {product.price}$
                        </td>
                        <td className='px-6 py-4 max-md:hidden'>
                            <a href="#" onClick={() => window.open(product.urlprod, '_blank')} target="_blank" >{product.urlprod}</a>
                        </td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/products/details/${product._id}`}>
                                    <BiUserCircle  className='text-2xl text-green-800 dark:text-green-200' />
                                </Link>
                                <Link to={`/products/edit/${product._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600 dark:text-yellow-200' />
                                </Link>
                                <Link to={`/products/delete/${product._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600 dark:text-red-200' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
          
      </div>

      </>
   
    )
  }
  
export default ProductTable