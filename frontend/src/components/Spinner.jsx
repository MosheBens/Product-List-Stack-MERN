import React from 'react'

// Component In Charge Of The Loading Animate
const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='animate-bounce w-40 h-40 m-8 rounded-full bg-sky-600 flex items-center justify-center'>
        <span className="text-black text-2xl">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
