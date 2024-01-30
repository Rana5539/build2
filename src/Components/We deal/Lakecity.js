import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './images/Lake-City-Logo-png-1-1024x1009.png';

function DHA() {
  return (
    <>
    <Box sx={{
        position:'relative',
        width: '300px', 
        height: '300px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        bgcolor: 'rgba(251, 217, 185, 1)',
        borderRadius:"20px",
        '@media screen and (max-width:950px)':{
            mt:3,
            width:'250px',
            height:'300px'
        }}} className='bg'>
           <Box sx={{m:'auto',display:'flex',justifyContent:'center',mt:3}}><img src={img} width={'50%'}></img></Box> 
           <Typography sx={{fontSize:'30px',fontFamily:'Poppins',textAlign:'center',fontWeight:'500'}}> Lake City</Typography>
           <Typography sx={{fontFamily:'Inria Sans',textAlign:'center',color:'grey'}}>Deals in luxirious project ever <br/> Contact us to know more</Typography>
        </Box>
    </>
  )
}

export default DHA