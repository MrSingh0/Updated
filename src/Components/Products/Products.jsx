import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Pfirst from "../../assets/Pfirst.png";
import Psecond from "../../assets/Psecond.png";
import Pthird from "../../assets/Pthird.png";
import {motion} from "framer-motion"
import "./style.css";

const Products = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <motion.h1 className='text-2xl text-center pt-10 pb-3 text-red-600 font-medium underline decoration-black overline'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        PRODUCTS
      </motion.h1>

      <div className='ppage w-full bg-white flex items-center'>
        <div className='flex all pl-10 pr-10 justify-between w-full'>
          <motion.div className='cont w-3/4 mr-3'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Pfirst} alt=""/>
            <h1 className='text-center text-xl mt-1 font-medium'>Mercury Battery Kit</h1>
            <p>This kit is specially designed for application, testing and charging purpose in the two wheeler battery sector.</p>
          </motion.div>

          <motion.div className='cont w-3/4  mr-2'
            initial={{ y: +50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Psecond} alt=""/>
            <h1 className='text-center text-xl mt-1 font-medium'>Venus Battery Kit</h1>
            <p>This kit is specially made and designed for applicaiton, testing and charging purpose in the four wheeler battery sector.</p>
          </motion.div>

          <motion.div className='cont w-3/4 mr-2'
            initial={{ x: +50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Pthird} alt="" />
            <h1 className='text-center text-xl mt-1 font-medium'>Earth Battery Kit</h1>
            <p>It is designed for high capacity range of batteries and has 2 modules: Water and Land</p>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;