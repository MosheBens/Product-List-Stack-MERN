import React, {useState} from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton';
import { useNavigate , useParams} from 'react-router-dom';

// Component In Charge Of Delete A Current Product
const DeleteProduct = () => {
    // Check If Loading Is True, If True The Spinner Animate Is On AtherWise The website Structure Is Display
    const [loaing,setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteProduct = () => {
        setLoading(true);
        axios.delete(`http://localhost:5555/products/${id}`).then(() => {
            setLoading(false);
            navigate("/");
        })
        .catch((error) => {
            setLoading(false)
            alert("error happend")
            console.log(error)
        });
    };
  return (
    <div className='p-4 dark:text-white'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Delete Product</h1>
        {loaing ? <Spinner/> : ""}
        <div className='flex flex-xol items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl'> 
                Are You Sure You Want To Delete This Product?
            </h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteProduct}>
                Yes, Delete Product
            </button>
        </div>
    </div>
  )
}

export default DeleteProduct