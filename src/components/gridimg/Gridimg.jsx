import React from 'react'

function Gridimg({ imageUrl, text,explain }) {
  return (
    <>
      <div className="flex flex-col relative items-center justify-center w-3/6 h-3/6 border border-slate-700 rounded-md m-1 mt-8 p-3">
      <img src={imageUrl} alt="Square" className="  items-center opacity-1 justify-center" />
      <p className='flex absolute text-center bottom-12 text-3xl font-sans font-semibold  text-white'>{text}<br/>{explain} </p>
    </div>
    

    </>
  )
}

export default Gridimg