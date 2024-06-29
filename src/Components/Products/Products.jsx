import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Pfirst from "../../assets/Pfirst.png";
import Psecond from "../../assets/Psecond.png";
import Pthird from "../../assets/Pthird.png";
import {motion} from "framer-motion"
import FourthWindow from '../HomeWindows/FourthWindow/FourthWindow';
import "./style.css";

const Products = () => {
  return (
    <div className='w-full ducts'>
      <Navbar/>
        <FourthWindow/>
      <Footer/>
    </div>
  );
};

export default Products;