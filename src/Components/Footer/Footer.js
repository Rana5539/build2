import { Box, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <>
    
    <Box sx={{width:'100%',bgcolor:'black'}}>
    <Typography sx={{pt:4,textAlign:'center',color:'white', fontFamily: 'Tilt Neon', fontSize:'35px'}}>Build</Typography>
        <Box sx={{m:'auto',alignItems:'center',justifyContent:'space-between',display:'flex',width:'40%',mt:2,'@media screen and (max-width: 1000px)':{
            flexDirection:'column',
            gap:'10px'
        }}}>
<Link sx={{textDecoration:'none',color:'grey',fontSize:'18px',fontFamily:"Inria Sans",cursor:'pointer'}}>Home</Link>
<Link sx={{textDecoration:'none',color:'grey',fontSize:'18px',fontFamily:"Inria Sans",cursor:'pointer'}}>About us</Link>
<Link sx={{textDecoration:'none',color:'grey',fontSize:'18px',fontFamily:"Inria Sans",cursor:'pointer'}}>Contact us</Link>
<Link sx={{textDecoration:'none',color:'grey',fontSize:'18px',fontFamily:"Inria Sans",cursor:'pointer'}}>Projects</Link>
<Link sx={{textDecoration:'none',color:'grey',fontSize:'18px',fontFamily:"Inria Sans",cursor:'pointer'}}>Services</Link>
        </Box>
        <Box sx={{m:'auto',width:'15%',alignItems:'center',justifyContent:'space-between',display:'flex',mt:3,'@media screen and (max-width:750px)':{
            width:'40%'
        }}}>
          <IconButton
          href='https://www.instagram.com/itxrana_waqar/'
          target="_blank"
      rel="noopener noreferrer">
        <Instagram sx={{color:'white',fontSize:'30px'}} />
        </IconButton>
        <IconButton
         href='https://www.facebook.com/profile.php?id=100076756789132'
         target="_blank"
     rel="noopener noreferrer">
        <Facebook sx={{color:'white',fontSize:'30px'}} />
        </IconButton>
        <IconButton
        href='https://www.linkedin.com/in/waqar-akram-396b36208/'
        target='_black'
        rel='nooopener noreferrer'>
        <LinkedIn sx={{color:'white',fontSize:'30px'}} />
        </IconButton>
        </Box>
       
        <Typography sx={{color:'grey',display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',mt:2,fontFamily:'Poppins',fontSize:'14px'}}>Copyright <CopyrightIcon sx={{ml:0.5,mr:0.5,fontSize:'20px'}}/>2024. All rights reserved</Typography>
    </Box>
    </>
  )
}

export default Footer