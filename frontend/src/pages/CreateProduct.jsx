import React, {useState} from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

 
// Component In Charge Of Creacte A New Product
const CreateProduct = () => {

    // Get The Product Values
    const [productname,setProduct] = useState("");
    const [color,setColor] = useState("");
    const [price,setPrice] = useState("");
    const [urlprod,setUrlProd] = useState("");
    // Check If Loading Is True, If True The Spinner Animate Is On AtherWise The website Structure Is Display
    const [loaing,setLoading] = useState(false);
    const navigate = useNavigate();
    // Get The Product Values To Put Them In The DB
    const handleSaveProduct = () => {
        const data = {
            productname,
            color,
            price,
            urlprod
        };
        setLoading(true); 
        // Post The New Product 
        axios.post("http://localhost:5555/products",data).then(() => {
            setLoading(false);
            navigate("/");
        })
        .catch((error) => {
            setLoading(false);
            alert("An Error Happend,Check Console")
            console.log(error)
        });
    };
    return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>
            Create Product
        </h1>
        {loaing ? <Spinner/> : ""}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Product Name</label>
                <input type='text' value={productname} onChange={(e) => setProduct(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  />
            </div>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Color</label>
                <input type='text' value={color} onChange={(e) => setColor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  />
            </div>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Price in $</label>
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  />
            </div>

            {/* ---------------------------------- */}
            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Url Product</label>
                <input type='text' value={urlprod} onChange={(e) => setUrlProd(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'  />
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveProduct}>
                Save
            </button>

        </div>
    </div>
  )
}

export default CreateProduct