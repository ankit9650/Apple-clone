import React from 'react'

function Getknow({ line1, line2,  back, htext }) {
  return (
    <div className="relative h-[300px] w-[300px] rounded-4xl shadow-xl	 ">
      <img
        src={back}
        alt="hello"
        className=" h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
        <h1 className='absolute left-14 text-5xl font-Cedarville_Cursive text-white font-bold bottom-20'>{htext}</h1>
        <div className="absolute top-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{line1}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {line2}
          </p>

        </div>
      </div></div>
  )
}
export default Getknow;