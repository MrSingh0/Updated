import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import FeedbackForm from '../Components/Forms/FeedbackForm'

const Feedback = () => {
  return (
    <div className='w-full'>
        <Navbar/>
        <FeedbackForm/>
        <Footer/>
    </div>
  )
}

export default Feedback


