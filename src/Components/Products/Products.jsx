import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Pfirst from "../../assets/Pfirst.png";
import Psecond from "../../assets/Psecond.png";
import Pthird from "../../assets/Pthird.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pstyle.css";

const MotionLink = motion(Link);

const Products = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="products">
        <motion.h1 className="text-4xl text-center pt-10 font-medium"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <u className="decoration-red-600 decoration-3">OUR PRODUCTS</u>
        </motion.h1>
        <div className="allp flex mt-10 pl-4 pr-4">
          <MotionLink to="/product/1" className="lenk mr-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Pfirst} alt="Mercury Battery" />
            <h1 className="text-black">Mercury Battery Kit</h1>
          </MotionLink>

          <MotionLink to="/product/2" className="lenk mr-2"
            initial={{ y: +50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Psecond} alt="Mercury Battery" />
            <h1 className="text-black">Venus Battery Kit</h1>
          </MotionLink>

          <MotionLink to="/product/3" className="lenk mr-2"
            initial={{ x: +50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Pthird} alt="Mercury Battery" />
            <h1 className="text-black">Earth Battery Kit</h1>
          </MotionLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
