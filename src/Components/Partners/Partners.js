import {  Box, Typography } from '@mui/material'
import React from 'react'
const arr = [{text:'Elegant Properties', src: require('./images/building.png')},
{text:'Royal Estate', src: require('./images/real-estate-agency.png')},
{text:'Chohan Estate', src: require('./images/real-estate.png')},]
function Partners() {
  return (
    <>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500',pt:2}}>Our Partners</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>These brands have collabe with us</Typography> 
    <Box sx={{width:'100%',borderRadius:'20px',display:'flex',alignItems:'center',mt:4,justifyContent:'space-evenly',background: 'linear-gradient(to bottom,  rgba(251, 217, 185, 1), white)',pb:3,
  '@media screen and (max-width : 500px)':{
    flexDirection:'column'
  }}}>
   
      {arr.map((data)=>(
        <Box sx={{textAlign:'center',mt:4}}> <img src={data.src} height={'75px'} alt=''/> 
        <Typography  sx={{fontFamily:'Poppins',fontWeight:'500',mt:1,}}>{data.text}</Typography></Box>
      ))}
     
    </Box>
    </>
  )
}

export default Partners