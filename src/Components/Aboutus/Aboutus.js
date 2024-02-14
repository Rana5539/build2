import React from 'react'
import Navbar from '../Navbar/Navbar'
import Responsive from '../Navbar/Responsive'
import ScrollToTop from '../Scrolltop'
import { Box } from '@mui/material'
import './about.css'

const img = require('./pexels-frederik-sørensen-2404843.jpg')
function Aboutus() {
  return (
    <>
     
    <Navbar/>
    <Responsive/>
    <ScrollToTop/>
    <Box sx={{width:'100%',height:'40vh',position:'relative',mt:4}} className='g'>

    </Box>
    
    </>
  )
}

export default Aboutus