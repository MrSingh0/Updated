import React from 'react'
import flag from "../../assets/flag.png"
import {motion} from "framer-motion"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./style.css"

const MainScreen = () => {
  return (
    <div className='main w-full'>
        <img src={flag} alt="" srcset="" />
        <h1 className='wel'>FOREFRONT BHARAT</h1>
        <p className='sust'>Sustainable Innovation Company</p>

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
