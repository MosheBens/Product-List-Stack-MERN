import React  from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete,MdProductionQuantityLimits  } from 'react-icons/md';
import { IoIosColorPalette } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

// Component In Charge Of The Card Structure
const ProductSingleCard = ({product}) => {

    return (
      <div key={product._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-x bg-orange-200  hover:transform hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          
          <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg hover:shadow-xl'>
              {product.price}$
          </h2><br></br>
          <h4 className='my-2 text-gray-500'>
              {product._id}
          </h4>
          <div className='flex justify-start items-center gap-x-2'>
              <MdProductionQuantityLimits className='text-blue-600 text-2xl'/>
              <h2 className='my-1 '>{product.productname}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
              <IoIosColorPalette className='text-blue-600 text-2xl' />
              <h2 className='my-1'>{product.color}</h2>
          </div>
          <div className='flex justify-start items-center gap-x-2'>
              <a href="#"  onClick={() => window.open(product.urlprod, '_blank')} target="_blank"><FaExternalLinkAlt className='text-blue-600 text-2xl' /></a>
              <a className='my-1 font-bold' href="#" onClick={() => window.open(product.urlprod, '_blank')} target="_blank">Product URL</a>
          </div>
          <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
              <Link to={`/products/details/${product._id}`}>
                  <BsInfoCircle className='text-3xl text-fuchsia-950 hover:text-black dark:text-purple-300' />
              </Link>
  
              <Link to={`/products/edit/${product._id}`}>
                  <AiOutlineEdit className='text-3xl text-yellow-800 hover:text-black dark:text-orange-200'/>
              </Link>
  
              <Link to={`/products/delete/${product._id}`}>
                  <MdOutlineDelete className='text-3xl text-red-600 hover:text-black dark:text-red-300'/>
              </Link>
          </div>
      </div>
  
      )
  }
  
  export default ProductSingleCard