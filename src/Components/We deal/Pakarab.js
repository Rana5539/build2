import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './images/pngtree-pak-arab-housing-scheme-logo-vector-png-image_13280516.png';

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
           
            width:'250px',
            height:'300px'
        },
        '@media screen and (max-width:1080px)':{
          mt:3,
        
      }}} className='bg'>
           <Box sx={{m:'auto',display:'flex',justifyContent:'center',mt:5}}><img src={img} width={'50%'} alt=''></img></Box> 
           <Typography sx={{fontSize:'30px',fontFamily:'Poppins',textAlign:'center',fontWeight:'500'}}> Pak Arab Hs</Typography>
           <Typography sx={{fontFamily:'Inria Sans',textAlign:'center',color:'grey'}}>Dealing in most demanding scheme <br/> Contact us to know more</Typography>
        </Box>
    </>
  )
}

export default DHA