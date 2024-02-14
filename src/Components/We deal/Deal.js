import { Box, Typography } from '@mui/material'
import React from 'react'
import DHA from './DHA'
import Lakecity from './Lakecity'
import Bahria from './Bahria'
import Pakarab from './Pakarab'
function Main() {
  return (
    <>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500',pt:2}}>We deal in</Typography>
    <Box sx={{mt:5,width:'100%',alignItems:'center',display:'flex',mb:3}}>
     
      <Box sx={{width:'70%',height:'auto',m:'auto'}}>
        <div data-aos='zoom-in'>
<Box sx={{m:'auto',width:'80%',display:'flex',justifyContent:'space-between',alignItems:'center','@media screen and (max-width:1080px)':{
  flexDirection:'column'
}}} >
  <DHA/>
  <Lakecity/>
</Box></div>
<div data-aos='zoom-in'>
<Box sx={{m:'auto',width:'80%',display:'flex',justifyContent:'space-between',alignItems:'center',mt:3,'@media screen and (max-width:1080px)':{
  flexDirection:'column'
}}} >
  <Bahria/>
  <Pakarab/>
</Box></div>
      </Box>
          </Box>
    </>
  )
}

export default Main