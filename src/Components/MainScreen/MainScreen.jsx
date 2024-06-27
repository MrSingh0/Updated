import React from 'react'
import flag from "../../assets/flag.png"
import {motion} from "framer-motion"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./style.css"

const MainScreen = () => {
  return (
    <div className='main w-full'>
        <img src={flag} alt="" srcset="" />
        <h1>FOREFRONT BHARAT</h1>
        <p>Sustainable Innovation Company</p>
        <motion.a href="" className='scroll'
          animate={{ y: [0, -10, 0] }} // Up and down animation
          transition={{
            duration: 1, // Duration of each cycle
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Loop the animation
            ease: "easeInOut" // Easing function
          }}
        >
          Scroll Down
          <ArrowDownwardIcon/>
        </motion.a>
    </div>
  )
}

export default MainScreen
