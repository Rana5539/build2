import React from 'react'
import {  Box} from '@mui/material'
import Drwr from "./Drwr"
const img = require('./images/pngwing.com (16).png')
function Responsive() {
  return (
    <>
    <Box sx={{
        width:'100%',
        display: 'flex',
        justifyContent:'space-between',
        height:'10vh',
        mx:'auto',
        mt:0.3,
        alignItems:'center',
        '@media screen and (min-width: 702px)': {
          display: 'none', 
        },}}>
         <img src={img} style={{width:'23%'}} alt=''></img>   
        <Drwr/>
        </Box>
    </>
  )
}

export default Responsive