import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox  } from 'react-icons/md';
import ProductTable from '../components/home/ProductTable';
import ProductsCard from '../components/home/ProductsCard';
import Navbar from './Navbar';

// Component Set The Structure Of The Page
const SiteStructure = () => {
    
    // products is a array that contain all the object data each object in the array contain all the fields of product
    const [products,setProducts] = useState([]);
    // Check If Loading Is True, If True The Spinner Animate Is On AtherWise The website Structure Is Display
    const [loading, setLoading] = useState(false);
    // Show To The Home Page The Table Style Or Card Style
    const [showType,setShowType] = useState("table")

    // get the data
    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5555/products").then((res) => {
            setProducts(res.data.data)
            setLoading(false);

        })
        .catch((error) => {
            console.log(error);
            setLoading(false);

        });
    }, []);

  return (
    <>
    {/* Navbar In The Top Of The Screen */}
    <Navbar setShowType={setShowType}/>
    {/* The  Structure Of The Body Of Home Page*/}
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='darklightid text-3xl my-8 dark:text-white'>Pruducts List</h1>
            <Link to="/products/create" className="flex items-center">
                <span className='darklightid ml-2 text-sky-800 text-xl dark:text-white'>Add Product</span>
                <MdOutlineAddBox className='darklightid text-sky-800 text-4xl dark:text-white' />
            </Link>
        </div>
        {/* Check If Loading Is True, If True The Spinner Animate Is On AtherWise The website Structure Is Display*/}
        {loading ? <Spinner/> : showType === "table" ? (<ProductTable products={products}/>) : (<ProductsCard products={products}/>) }  
    </div>
    </>
  )
}

export default SiteStructure