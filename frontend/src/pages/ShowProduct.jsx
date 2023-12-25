import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

// Show The Product Details If The User Press On The Info Icon
const ShowProduct = () => {
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    // Get The Data Of Specific Product By Id
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/products/${id}`).then((res) => {
            setProduct(res.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }, [])
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Show Product</h1>
        {/* Check If Loading Is True, If True The Spinner Animate Is On AtherWise The Product Details Show*/}
        {loading ? (
            <Spinner />
        ) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 dark:text-white'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                    <span> {product._id} </span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Product</span>
                    <span> {product.productname} </span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Color</span>
                    <span> {product.color} </span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Price</span>
                    <span> {product.price} </span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                    <span> {new Date(product.createdAt).toString()} </span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Update Time</span>
                    <span> {new Date(product.updatedAt).toString()} </span>
                </div>
                {/* ------------------------------------------------------------ */}
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>URL Product</span>
                    <span> {product.urlprod} </span>
                </div>
            </div>
        )}
    </div>
    
  )
}

export default ShowProduct