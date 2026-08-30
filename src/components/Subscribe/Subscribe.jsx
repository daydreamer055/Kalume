import React, { useState } from 'react'
import Banner from '../../assets/orange-pattern.jpg'



const BannerImg = {
backgroundImage : `url(${Banner})`,
backgroundPosition: "center",
backgroundRepeat:"no-repeat",
backgroundSize: "cover",
height:"100%",
width:"100%",
}


const Subscribe = () => {
  const [email,setEmail] = useState("")
  const [message,setMessage]= useState("")
  const handleSubscribe =()=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(email)){
      setMessage("Invalid email ❌")
      return
    }
    setMessage("you will be notified soon!")
  }
  return (
    <div 
    data-aos="zoom-in"
    className= ' mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
       <div className='container backdrop-blur-sm py-10'>
          <div className='space-y-6 max-w-xl mx-auto '>
            <h1
            className='text-2xl text-center sm:text-left sm:text-4xl font-semibold '
            >Get Notified About New Products</h1>
            <input 
            data-aos ="fade-up"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='Enter Your email'
            className='w-full p-3 text-black'

            />
            <button 
            onClick={handleSubscribe}
            className='bg-primary px-6 py-3 rounded-r-md'>Subscribe</button>
          </div>
          {message && (
            <p className='text-center font-semibold'>{message}</p>
          )}

       </div>
    </div>
  )
}

export default Subscribe
