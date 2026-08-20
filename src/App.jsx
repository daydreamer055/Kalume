import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

const App = () => {

const [orderpopup,setOrderPopup] = React.useState(false);

const handleOrderPopup=() =>{
  setOrderPopup(!orderpopup);
}
  React.useEffect(() =>{
    Aos.init({
      offset:100,
      duration:200,
      easing: "ease-in-sine",
      delay:100,
    });
    Aos.refresh();
  },[] );
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}></Navbar>
      <Hero handleOrderPopup={handleOrderPopup}></Hero>
      <Products></Products>
      <TopProducts handleOrderPopup={handleOrderPopup}></TopProducts>
       <Banner></Banner>
        <Subscribe></Subscribe>
        <Products></Products>
        <Testimonials></Testimonials>
        <Footer></Footer>
        <Popup orderpopup={orderpopup} setOrderPopup={setOrderPopup}></Popup>
    </div>
  )
}

export default App
