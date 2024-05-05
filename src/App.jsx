import { useState,useEffect } from 'react'
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Carousel from './components/carousel/Carousel'
import Gridimg from './components/gridimg/Gridimg'

function App() {
  const [count, setCount] = useState(0)
  let products={
    Name:"Macbook Pro 16GB",
    image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    price:"starting from 1,250,000"
  } 

  const slides = [
    {
      image: "https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png",
      text: "iPhone 15 pro ",
      explain:"Titanium. So strong. So light. So pro. "
    },
    {
      image: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg",
      text: "iPhone 15 Pro",
      explain:"Titanium. So strong. So light. So pro. "
    },
    {
      image: "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "iPhone 15 Pro",
      explain:"Titanium. So strong. So light. So pro. "
    },
    ];





  return (
    <>
      {/* Navbar section */}
      <div>
      <Navbar/> 
          
      

      {/* heading section */}
      <div
      className='text-white text-s flex justify-center p-2 bg-zinc-800 '
      >
        <p>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.‡ <a href='#' className='text-blue-500'>Shop now.</a></p>
      </div>

      {/* Carousel section */}
      <div className="container mx-auto">
      <Carousel slides ={slides.image} text={slides.text} explain={slides.explain} />
    </div>
   
      
      
      {/* Grid Section  */}
     
    <div className="flex justify-center">
     <Gridimg imageUrl="https://images.macrumors.com/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" text="Relax it's iPhone."  explain="Dependebly Durable" />
     <Gridimg imageUrl="https://expatlifeindonesia.com/wp-content/uploads/wwdc-2023-vision-pro-eyesight.png" text="Square 1" />
     </div> 
     <div className="flex justify-center">
     <Gridimg imageUrl="https://www.cnet.com/a/img/resize/dcf497c2d0ac684974ad3bf9904cbcb9e00e92d9/hub/2024/03/06/725a8e72-aa72-439a-9357-af161b30f3c9/apple-macbook-air-m3-2024-14.jpg?auto=webp&fit=crop&height=362&width=644" text="Square 1" />
     <Gridimg imageUrl="https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-10th-gen-hero-221018.jpg.og.jpg?202404111950" text="Square 1" />
     </div> 
     
     {/* Card heading section */}     
     <div className= 'pb-3' >
      <h1
      className='text-left text-4xl font-sans font-semibold mt-5 ml-32 text-white ' id='typing-demo'
      >
       Store.The best way to buy the <br />products you love.
       </h1>
       
          
      {/* Card section  */}
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
      
      


      {/* Footer section */}
     <Footer/>
     </div>
     </div>
    </>
  )
}

export default App
