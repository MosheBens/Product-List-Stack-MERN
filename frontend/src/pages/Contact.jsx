import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

// Component In Charge Of Contact Page
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 dark:text-white">
      <div className="p-12 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <span className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Me:
        </span>

        <div className="flex flex-col items-center justify-center gap-4 mb-4 pt-8">
          <div className='flex justify-center items-center gap-x-2'>
            <IoIosMail className='text-orange-400 text-3xl hover:text-slate-600' />
            <span className='text-xl'>Moshe123bs@gmail.com</span>
          </div>

          <div className='flex justify-center items-center gap-x-2 pt-5'>
            <IoLogoGithub className='text-slate-600 text-3xl hover:text-black' />
            <a
              href='https://github.com/MosheBens'
              className='flex items-center justify-center text-orange-400 hover:text-black text-xl'
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact