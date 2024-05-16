import { useState,useEffect } from 'react'
import Card from './components/card/Card'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Carousel from './components/carousel/Carousel'
import Gridimg from './components/gridimg/Gridimg'
import Buyiphone from './components/iphone15/Buyiphone'


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
      text: "iPhone 15 Pro",
      explain:"Titanium. So strong. So light. So pro. ",
      // button:"Buy now"
    },
    {
      image: "https://www.apple.com/v/macbook-pro-13/p/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
      text: "  MacBook Pro ",
      explain:" With M3, M3 Pro or M3 Max chip ",
      // button:"Buy now"
    },
    {
      image: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.landing-big_2x.jpg",
      text: "Introducing Apple Watch",
      explain:"Series 9 Smarter. Brighter. Mighter",
      // button:{Buyiphone}
    },
  ];
  



  return (
    <>
      {/* Navbar section */}
      <div >
      
          
      

      {/* heading section */}
      

      {/* Carousel section */}
      <div className="container mx-auto">
      <Carousel slides ={slides.image} text={slides.text} explain={slides.explain} button={slides.button}/>
    </div>
   
      
      
      {/* Grid Section  */}
     
    <div className="flex justify-center">
     <Gridimg imageUrl="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg" text="Relax it's iPhone."  explain="Dependebly Durable" />
     <Gridimg imageUrl="https://expatlifeindonesia.com/wp-content/uploads/wwdc-2023-vision-pro-eyesight.png" text="Apple Vision Pro" explain={"Welcome to the era of spatial computing."} />
     </div> 
     <div className="flex justify-center">
     <Gridimg imageUrl="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/06/Best-MacBook-1.jpg" text="MacBook Pro" explain={"Mind-blowing.Head-turning."} />
     <Gridimg imageUrl="https://images.macrumors.com/t/7hZCaaMo4T4JV6eLoJX2ou4lyqI=/1600x0/article-new/2021/05/ipad-pro-m1-feature.jpg" text="iPad" explain={"Touch, draw, and type on one magical device."} />
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
    
     </div>
     </div>
    </>
  )
}

export default App
