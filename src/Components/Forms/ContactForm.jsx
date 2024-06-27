import React from 'react'
import TextField from '@mui/material/TextField';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Cstyle.css"

const ContactForm = () => {
  return (
    <div className='pl-6 pr-6 mb-7'>
        <h1 className='text-3xl text-left pt-10 pb-3 text-red-600 font-medium'>CONTACT</h1>
        <h1 className='text-4xl text-black font-medium '><u className='decoration-red-600 decoration-3'>KEEP</u> IN TOUCH</h1>
        <div className='flex flex-col mt-2'>
            <div  className='flex flex-row text-center w-full justify-around items-center mt-5 w-2/4 text-center '>
                <div className='col flex h-36'>
                    <div className='w-16 content-center '>
                        <LocationOnSharpIcon className='bg-gray-600 rounded-full text-white p-1'/>
                    </div>
                    <div className='w-3/4 text-left content-center'>
                        <p className='head'>Address</p>
                        <p className='font-medium'>Shop:1 Bankora, Dungarpur, Rajasthan, 314001</p>
                    </div>
                </div>
                <div className='col flex h-36 ml-2 mr-2'>
                    <div className='w-16 content-center'>
                        <LocalPhoneIcon className='bg-gray-600 rounded-full text-white p-1'/>
                    </div>
                    <div className='w-3/4 text-left content-center'>
                        <p className='head'>Phone</p>
                        <p className='font-medium'>+91 63 78 08 84 59</p>
                    </div>
                </div>
                <div className='col flex h-36'>
                    <div className='w-16 content-center'>
                        <MailOutlineOutlinedIcon className='bg-gray-600 rounded-full text-white p-1'/>
                    </div>
                    <div className='w-3/4 text-left content-center'>
                        <p className='head'>Email</p>
                        <p className='font-medium'>forefrontbharat@gmail.com</p>
                    </div>
                    
                </div>
            </div>
            <div className='w-2/4 text-center w-full mt-4'>
                <form action="" className='second pl-5 pr-5 flex flex-col w-3/4 gap-3 pt-2'>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                    <TextField id="standard-basic" label="Email" variant="standard" />
                    <TextField id="standard-basic" label="Message" variant="standard" />
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </div>
    </div>
    
  )
}

export default ContactForm
