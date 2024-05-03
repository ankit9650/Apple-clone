import React from 'react'

function navbar(Navbar) {
  return (
    <div>
        <nav
        className='  justify-center space-x-10 bg-zinc-900 flex align-middle  w-full py-3 text-white '
        > 
            <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-apple-mac-vector-logo-download-23.png"
            className='w-6'
            />
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
        
    
    </div>
  )
}

export default navbar