import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { CopyrightRounded, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';
import An from './An'
import Responsive from '../Navbar/Responsive';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Scrolltop';

const arr = [{ text: 'CCA DHA phase 6, plaza no. 8,\nfloor 2, office 3',icon : <LocationOnRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: '+923074613828',icon : <LocalPhoneRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: 'wa852094@gmail.com',icon : <AlternateEmailRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: 'www.realstate.com',icon : <PublicIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> }];

function Contactus() {
  
  
  return (
    <>
    
    <ScrollToTop/>
    <Responsive/>
      <Navbar/>
    <Box sx={{width:'100%',display:'flex',height:'autoa',mt:5,'@media screen and (max-width: 850px)':{
            flexDirection:"column"
        }}}>
    
    
    <Box sx={{width:'35%',height:'100vh',bgcolor:'aliceblue',borderRadius:'35px 0px 0px 35px','@media screen and (max-width: 850px)':{
            width:'100%',
            borderRadius:'35px'
        }}} className='bg2'>
        <Typography sx={{textAlign:'justify',mt:5,color:'black',fontSize:'25px',fontFamily:'Poppins',fontWeight:'500',ml:6,'@media screen and (max-width : 450px)':{
        textAlign:'center',
        ml:0
        }}}>Contact us</Typography>
        
            {arr.map((data)=>(
                <Typography sx={{display:'flex',alignItems:'center',fontFamily:'Inria Sans',ml:6,mt:5,fontWeight:'600','@media screen and (max-width : 450px)':{
                    
                    ml:2
                    }}}>
                    {data.icon}{data.text}
                </Typography>
            ))}
        <Box sx={{m:'auto',width:'50%',alignItems:'center',justifyContent:'space-between',display:'flex',mt:12,}}>
          <IconButton
          href='https://www.instagram.com/itxrana_waqar/'
          target="_blank"
      rel="noopener noreferrer">
        <Instagram sx={{color:'crimson',fontSize:'35px'}} />
        </IconButton>
        <IconButton
         href='https://www.facebook.com/profile.php?id=100076756789132'
         target="_blank"
     rel="noopener noreferrer">
        <Facebook sx={{color:'blue',fontSize:'35px'}} />
        </IconButton>
        <IconButton
        href='https://www.linkedin.com/in/waqar-akram-396b36208/'
        target='_black'
        rel='nooopener noreferrer'>
        <LinkedIn sx={{color:'dodgerblue',fontSize:'35px'}} />
        </IconButton>
        </Box>
        <Typography sx={{color:'grey',display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center',mt:8,fontFamily:'Poppins',fontSize:'14px',pb:2}}>Copyright <CopyrightRounded sx={{ml:0.5,mr:0.5,fontSize:'20px'}}/>Developed by Waqar Akram</Typography>
    </Box>
    
    
    <Box sx={{width:'65%',height:'auto',bgcolor:'whitesmok','@media screen and (max-width:850px)':{
           textAlign:'center',
          
           justifyContent:'center',alignItems:'center',width:'100%'
           },}}>
   <An/>
    </Box>
       </Box>
       <Footer/>
       
        </>
  )
}

export default Contactus