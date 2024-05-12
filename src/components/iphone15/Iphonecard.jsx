import React from 'react'




function Iphonecard({Variant,Display,Emi}) {
  return (
    <div>
    <div className="p-2">
      <h1 className="inline-flex items-center text-lg font-semibold">
        {Variant}
      </h1>
      <p className="mt-2 text-sm text-gray-600">
      {Display}
      </p>
      <p className="mt-2 text-sm text-gray-600">
      {Emi}
      </p>
    
    </div>
  </div>
  )
}

export default Iphonecard