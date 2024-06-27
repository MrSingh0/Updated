import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MainScreen from '../Components/MainScreen/MainScreen'
import SecondPage from '../Components/HomeWindows/SecondWindow/SecondPage'
import ThirdWindow from '../Components/HomeWindows/ThirdWindow/ThirdWindow'
import FourthWindow from '../Components/HomeWindows/FourthWindow/FourthWindow'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <MainScreen/>
      <SecondPage/>
      <ThirdWindow/>
      <FourthWindow/>
      <Footer/>
    </div>
  )
}

export default HomePage
