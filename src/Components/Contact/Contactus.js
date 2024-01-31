import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { CopyrightRounded, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';
import { TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { Message } from '@mui/icons-material';

const arr = [{ text: 'CCA DHA phase 6, plaza no. 8,\nfloor 2, office 3',icon : <LocationOnRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: '+923074613828',icon : <LocalPhoneRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: 'wa852094@gmail.com',icon : <AlternateEmailRoundedIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> },
{ text: 'www.realstate.com',icon : <PublicIcon sx={{marginRight:2,fontSize:'35px',color:'blue'}}/> }];

function Contactus() {
  return (
    <>
    <Box sx={{width:'100%',display:'flex',height:'100vh','@media screen and (max-width: 850px)':{
            flexDirection:"column",
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
           ml:0,
           justifyContent:'center',alignItems:'center',width:'100%'
           },}}>
    <Typography sx={{mt:5,color:'black',fontSize:'25px',fontFamily:'Poppins',fontWeight:'500',ml:15,'@media screen and (max-width : 450px)':{
        textAlign:'center',
        ml:0
        },
        '@media screen and (max-width:850px)':{
           textAlign:'center',
           ml:0
           },}}>Get in touch</Typography>
 <TextField
      variant="outlined"
      placeholder="Name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
        style: {
          borderRadius: '40px',
          
        },
        sx: {ml:15,mt:3,width:'60vh',height:'7vh','@media screen and (max-width:1070px)':{
         width:'50vh'
        },
        '@media screen and (max-width:940px)':{
            width:'45vh'
           },
           '@media screen and (max-width:850px)':{
            ml:0
            },
            '@media screen and (max-width:450px)':{
                width:'35vh'
                 },
          '&:hover': {
            background: 'none',
          },
          '& input::placeholder': {
            fontFamily: 'Poppins'
          },
        },
      }}
    />
    <br/>
     <TextField
      variant="outlined"
      placeholder="Email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
        style: {
          borderRadius: '40px',
          
        },
        sx: {ml:15,mt:4,width:'60vh',height:'7vh','@media screen and (max-width:1070px)':{
            width:'50vh'
           },
           '@media screen and (max-width:940px)':{
            width:'45vh'
           },
           '@media screen and (max-width:850px)':{
            ml:0
            },
            '@media screen and (max-width:450px)':{
                width:'35vh'
                 },
          '&:hover': {
            background: 'none',
          },
          '& input::placeholder': {
            fontFamily: 'Poppins'
          },
        },
      }}
    /><br/>
     <TextField
      multiline
      minRows={8}
      maxRows={20}
      placeholder="Message"
      variant="outlined"
      InputProps={{
        
        style: {
          borderRadius: '10px',
        },
      }}
      sx={{width:'60vh',ml:15, mt:4,'@media screen and (max-width:1070px)':{
        width:'50vh'
       },
       '@media screen and (max-width:940px)':{
        width:'45vh'
       },
       '@media screen and (max-width:850px)':{
        ml:0,
        mx:'auto'
        },
        '@media screen and (max-width:450px)':{
           width:'35vh'
            },
        '& textarea': {
          resize: 'none',
          fontFamily: 'Poppins',
        },
        '&:hover': {
          background: 'none',
        },
        
      }}
    /><br/>
     <Button variant='outlined' sx={{
        textTransform:'none',
        fontFamily:'Poppins',
        color:'black',
        fontSize:"16px",
        bgcolor:'blue',
        border:'none',
        mt:2,ml:15,color:'white','@media screen and (max-width:850px)':{
            ml:0,
            
            },
        borderRadius:"20px",':hover': {
    bgcolor:'blue',
    border:'none',
  },}}>Message</Button>
    </Box>
       </Box>
        </>
  )
}

export default Contactus