import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './images/pinpng.com-bijli-png-6664237.png';

function DHA() {
  return (
    <>
    <Box sx={{
        position:'relative',
        width: '300px', 
        height: '300px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        bgcolor:' rgba(251, 217, 185, 1)',
        borderRadius:"20px",
        '@media screen and (max-width:950px)':{
           
            width:'250px',
            height:'300px'
        }}} className='bg'>
           <Box sx={{m:'auto',display:'flex',justifyContent:'center',mt:8}}><img src={img} width={'30%'}></img></Box> 
           <Typography sx={{fontSize:'30px',fontFamily:'Poppins',textAlign:'center',mt:2,fontWeight:'500'}}> DHA Lahore</Typography>
           <Typography sx={{fontFamily:'Inria Sans',textAlign:'center',color:'grey'}}>We deals in all phases of DHA Lahore <br/> Contact us to know more</Typography>
        </Box>
    </>
  )
}

export default DHA