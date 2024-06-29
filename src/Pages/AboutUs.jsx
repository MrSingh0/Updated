import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import About1 from "../assets/About1.png"
import './AboutStyle.css'

const AboutUs = () => {
  return (
    <div className='w-full text-black'>
      <Navbar />
      <div className='mai pl-16 pr-16'>
        <h1 className='text-3xl text-red-600 font-medium mt-3 mb-3'><u className='decoration-black'>ABOUT US</u></h1>
  
          <div className='w-full flex justify-center h-96'>
            <img src={About1} alt="" className='h-96  pr-2 rounded-xl' />
          </div>

          <div className='text-black mt-3'>
            <h1 className='headin font-medium text-4xl mb-2 mt-2'>WELCOME TO FOBHA FAMILY</h1>
            <p className='data text-xl mt-4 mb-3 leading-8'><u className='overline decoration-red-600 decoration-4'>We are pioneer company dedicated to </u>  provide sustainable solutions by focusing on sustainable development and implementation of innovation products into the real market. We aim to reduce resource consumption and streamline processes for greener and a better future. Our tools distinguish themselves through innovative design and functionality that redefine conventional battery application tools. The core principle of sustainability sets us apart, along with practical utility for end-users. By pioneering eco-friendly practices within the industry, we lead the way towards a more sustainable future.</p>
          </div>

        <h1 className='headin font-medium text-4xl mb-2'>OUR VISION & VALUE PROPOSITION</h1>
        <p className='data text-xl mt-4 leading-10'><u className='overline decoration-red-600 decoration-4'>Our vision is to lead the charge towards</u> a more sustainable future by revolutionizing battery applicaiton processes. We aim to achieve this by offering versatile battery kits to achieve this by offering versatile battery kits that not only streamline operations but also significantly reduce metal consumption conservation.</p>
        <div className='data flex w-full'>
          <div className='flex flex-col w-full text-xl'>
            <h1><b>Our value proposition are:</b></h1>
            <ul className='flex flex-col justify-center w-2/4 ml-20 text-xl mt-3 leading-8 mb-4 list-disc'>
              <li>Commitment to Sustainability</li>
              <li>Continuous Innovation</li>
              <li>Practical Utility for End-Users</li>
              <li>Holistic Approach</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs