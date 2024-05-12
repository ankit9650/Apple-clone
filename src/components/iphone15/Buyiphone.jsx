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
			<h1 className="text-4xl font-bold leading-none sm:text-5xl">iPhone 15 <br />
      Designed to be <span className="dark:text-blue-600"> loved.</span>
			</h1>
      {/* variants section */}
      <div className="mt-7  items-center rounded-md border ">    
      <Iphonecard Variant={"iPhone 15 pro "} Display={"15.5 cm (6.1)display"} Emi={"From ₹5621.00/mo.Per Month or ₹134900.00"}/>
      <div className=" items-center rounded-md border ">  
      <Iphonecard Variant={"iPhone 15 pro max"} Display={"15.5 cm (6.1)display"} Emi={"From ₹5621.00/mo.Per Month or ₹134900.00"}/>
       </div></div>

      {/* Emi line */}
			<p className="mt-6 mb-8 text-lg sm:mb-12">From ₹5621.00/mo.Per Month for 24 mo. with No Cost EMI with selected banks or ₹134900.00			
			</p>



			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50">Buy now</a>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://reapp.com.gh/wp-content/uploads/2023/12/81uHhPfJhhL._AC_SL1500_.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section> 


  
      
    
    </>
  )
}

export default Buyiphone