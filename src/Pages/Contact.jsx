import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContactForm from '../Components/Forms/ContactForm';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact
