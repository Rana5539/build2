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
    <Box sx={{mt:5,width:'100%',justifyContent:'space-between',alignItems:'center',display:'flex',mb:3}}>
      <Box sx={{width:'7%',height:'100vh',backgroundImage: 'linear-gradient(to right, white, rgba(193, 222, 232, 0.5))',borderRadius:'0px 65px 65px 0px','@media screen and (max-width:1080px)':{
  height:'180vh'
}}}></Box>
      <Box sx={{width:'70%',height:'auto'}}>
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
      <Box sx={{width:'7%',height:'100vh',backgroundImage: 'linear-gradient(to left, white, rgba(193, 222, 232, 0.5))',borderRadius:'65px 0px 0px 65px','@media screen and (max-width:1080px)':{
  height:'180vh'
}}}></Box>
    </Box>
    </>
  )
}

export default Main