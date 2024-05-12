import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(Navbar) {
  return (
    <div>
        <nav
        className='  justify-center space-x-10 bg-zinc-900 flex align-middle  w-full py-3 text-white '
        > 
            <Link to={"/"}>
            <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-apple-mac-vector-logo-download-23.png"
            className='w-6'
            /></Link>

            <button 
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >Store</button>
            <button
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >Mac</button>
            <button
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >iPhone</button>
            <button
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >iPad</button>
            <button
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >Watch</button>
            <button 
            className='text-zinc-400 text-xs font-medium hover:text-white'
            >Tv & Home</button>
            <button
            className='text-zinc-400 text-xs font-medium  hover:text-white'
            >Entertainment</button>
            <button
            className='text-zinc-400 text-xs font-medium   hover:text-white'
            >Accessories</button>
            <button
            className='text-zinc-400 text-xs font-medium   hover:text-white'
            >Support</button>
            <button
            className='text-zinc-400 text-xs font-medium   hover:text-white' type='dropdown'
            >AirPods</button>
        </nav>
        
        <div
      className='text-white text-s flex justify-center p-2 bg-zinc-800 '
      >
        <p>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.‡ <a href='#' className='text-blue-500'>Shop now.</a></p>
      </div>
    </div>
    
  )
}

export default Navbar