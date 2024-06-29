import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { motion } from "framer-motion"
import "./style.css"

export default function DealershipForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='mn flex justify-center w-full bg-gray-200'>
      <form onSubmit={handleSubmit} className='frm'>
        <motion.h1 className='text-2xl text-center pt-10 pb-3 text-red-600 font-medium'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >DEALERSHIP</motion.h1>

        <motion.h1 className='text-4xl text-black font-medium text-center mb-2'
          initial={{ x: +50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        ><u className='decoration-red-600 decoration-3'>Dealer</u>ship Inquiry</motion.h1>

        <motion.Box sx={{ display: 'flex' }} className="feedform flex"
          initial={{ y: +50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder='Enter Your Name'
              InputProps={{
                startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
              }}
            />

            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder='Enter Your Email Id'
              InputProps={{
                startAdornment: <InputAdornment position="start"><EmailRoundedIcon /></InputAdornment>,
              }}
            />
          </div>

          <div>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder='Enter Your Phone Number'
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocalPhoneRoundedIcon /></InputAdornment>,
              }}
            />

            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder="Enter Subject"
              InputProps={{
                startAdornment: <InputAdornment position="start"><DescriptionRoundedIcon /></InputAdornment>,
              }}
            />
          </div>

          <div>
            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder='Enter Your City Name'
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocationCityRoundedIcon /></InputAdornment>,
              }}
            />

            <TextField
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              placeholder="Enter Your State Name"
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocationOnRoundedIcon /></InputAdornment>,
              }}
            />
          </div>

          <div className='w-full'>
            <textarea
              className='message w-full text-black p-2 border-2 resize-x h-32 w-3/4'
              id="outlined-start-adornment"
              placeholder='Enter Details'
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </motion.Box>
      </form>
    </div>
  );
}
