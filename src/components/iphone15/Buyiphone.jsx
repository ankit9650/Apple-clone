import React,{useState} from 'react'
import Iphonecard from './Iphonecard'


  

function Buyiphone() {
 
  
  const [count, setCount] = useState(0)
  let Variants={
    Variant:"iPhone 15 pro",
    Emi:"From ₹5621.00/mo.Per Month or ₹134900.00",
    Display:"15.5 cm (6.1)display"
  
} 


  return (
    <>
  <section className="dark:bg-gray-100 dark:text-gray-800">
    {/* Heading section */}
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-5xl">iPhone<span className='from-blue-600 via-blue-400 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent '>15</span> <br />
      Designed to be <span className="dark:text-blue-600"> loved.</span>
			</h1>
      {/* variants section */}
      <h2 className='mt-6 text-2xl font-bold leading-none sm:text-2xl'>Model. <span className='text-gray-500'>Which is best for you?</span> </h2>
      <div className="mt-1  items-center rounded-md border ">    
      <Iphonecard Variant={"iPhone 15 pro "} Display={"15.5 cm (6.1)display"} Emi={"From ₹5621.00/mo. Per Month or ₹134900.00"}/>
      <div className=" items-center rounded-md border ">  
      <Iphonecard Variant={"iPhone 15 pro max"} Display={"17.0 cm (6.7)display"} Emi={"From ₹6662.00/mo. Per Month or ₹159900.00"}/>
       </div></div>

      {/* Storage line */}
			<h2 className='mt-6 text-2xl font-bold leading-none sm:text-2xl'>Storage. <span className='text-gray-500'>How much space do you need?</span> </h2>
      <div className="mt-1 flex flex-row  items-center rounded-md border ">    
      <Iphonecard Variant={"256 GB"}  Emi={"From ₹6662.00/mo.Per Month or ₹159900.00"}/>
      <Iphonecard Variant={"512 GB"} Display={"17.0 cm (6.7)display"} Emi={"From ₹7496.00/mo.Per Month or ₹179900.00"}/>
      </div>
      <div className="mt-1 flex flex-row  items-center rounded-md border ">    
      <Iphonecard Variant={"1 TB"}  Emi={"From ₹8329.00/mo.Per Month or ₹199900.00"}/>      
      </div>


			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<button href="#" className="px-8 mt-3 py-3 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50">Buy now</button>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="src\components\iphone15\[CITYPNG.COM]Apple iPhone 15 All Colors HD PNG - 5000x5000.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-33 2xl:h-33" />
		</div>
	</div>
</section> 


  
      
    
    </>
  )
}

export default Buyiphone;