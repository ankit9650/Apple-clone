import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'


function App() {
  const [count, setCount] = useState(0)
  let products={
    Name:"Macbook Pro 16GB",
    image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    price:"starting from 1,250,000"
  }

  





  return (
    <>
  
      <div>
      <Navbar/> 
          
      


      <div
      className='text-white text-s flex justify-center p-2 bg-zinc-800 '
      >
        <p>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.‡ <a href='#' className='text-blue-500'>Shop now.</a></p>
      </div>     
      <div className= 'pb-3' >
      <h1
      className='text-left text-4xl font-sans font-semibold mt-5 ml-32 text-white ' id='typing-demo'
      >
       Store.The best way to buy the <br />products you love.
       </h1>
       <Carousel/>
        

     <div className='flex space-x-6 justify-center mt-8'>
      <Card  Name="Macbook Pro 16GB" image={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1663415332/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_0_ton7gy.png?tr=w-600"} 
        price={"Starting from 2,50,000"}
      />
      <Card Name="Macbook Air 16GB" image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433"
        price={"Starting from 1,99,000"}
      />
      <Card  Name="iphone15 Pro 256GB" image={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096"}
         price={"Starting from 1,50,000"}
      />
      <Card Name="ipad Air 16GB" image={"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-storage-select-202207-pink-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670879027965"}
         price={"Starting from 1,40,000"}
      />

    

     </div>
     <Footer/>
     </div>
     </div>
    </>
  )
}

export default App
