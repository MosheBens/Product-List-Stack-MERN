import React from 'react'
import {Link} from "react-router-dom"
import {BsArrowLeft} from "react-icons/bs"


// Component In Charge Of The Blue Back Button To Return To The Home Page "/"
const BackButton = ({destination = "/"}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit' >
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton