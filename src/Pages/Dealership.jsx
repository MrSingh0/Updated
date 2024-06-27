import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import DealershipForm from '../Components/Forms/DealershipForm'

const Dealership = () => {
  return (
    <div className='w-full'>
        <Navbar/>
        <DealershipForm/>
        <Footer/>
    </div>
  )
}

export default Dealership
