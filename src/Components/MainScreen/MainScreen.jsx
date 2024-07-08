import React from 'react'
import flag from "../../assets/flag.png"
import {motion} from "framer-motion"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./style.css"

const MainScreen = () => {
  return (
    <div className='main w-full'>
        <img src={flag} alt="" srcset="" />
        <motion.h1 className='wel'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >FOREFRONT BHARAT
        </motion.h1>

        <motion.p className='sust'
          initial={{ x: +100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >Sustainable Innovation Company</motion.p>

        <motion.a href="" className='scroll'
          animate={{ y: [0, -10, 0] }} 
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" 
          }}
        >
          Scroll Down <ArrowDownwardIcon/>
        </motion.a>

    </div>
  )
}

export default MainScreen
