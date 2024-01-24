import { Box,Button, Typography } from '@mui/material'
import React  from 'react'
const img = require('./images/Final ii 1.png')
function Jumbotron() {
    
           
  return (
    <>
    <Box sx={{display:'flex',m:'auto',width:'95%',p:1,height:'auto', backgroundImage: 'linear-gradient(to right, rgba(251, 217, 185, 1), rgba(193, 222, 232, 1))',mt:2,borderRadius:"35px",justifyContent:"space-between",
'@media screen and (max-width: 1135px)': {
    flexDirection:"column", 
    textAlign:'center',
    width:'90%'
  },}}>
        <Box sx={{ml:4,mt:15,'@media screen and (max-width: 1135px)': {
    mt:1,
    ml:0
  },}}>
        <Typography sx={{color:'grey',fontFamily:'Inria Sans'}}>Welcome to RealState</Typography>
        <Typography sx={{fontFamily:'Poppins',fontSize:'63px',fontWeight:'600',lineHeight:1.3,mt:2,'@media screen and (max-width: 550px)': {
    fontSize:'40px'
  },}}>Manage Your <br/> Property</Typography>
        <Typography sx={{fontFamily:'Poppins',fontSize:'14px',mt:2}}>We are working from last 20 years as a Real State company we have completed 350+ projects if you want spanish and stylish houses designs you are at right place we are just one click away. Join our club of 300+ happy clients. Hit contact us button to know more about us. </Typography>
        <Button
        sx={{textTransform:"none",mt:2, color:"black",backgroundImage: 'linear-gradient(to right, whitesmoke, rgba(193, 222, 232, 1))', fontFamily:'Poppins',fontSize:'16px',borderRadius:'20px',pr:2,pl:2,'@media screen and (max-width: 1135px)': {
          display:'none'
        },}}
      >
              Contact us
      </Button>
        </Box>
        <img src={img} style={{ maxWidth: '95%', height: 'auto' }} alt='house' />
        <Box marginTop={2}>
        <Button size='large'
        sx={{textTransform:"none", color:"black",backgroundImage: 'linear-gradient(to right,  rgba(193, 222, 232, 1), whitesmoke)', fontFamily:'Poppins',fontSize:'16px',borderRadius:'20px',pr:2,pl:2,m:'auto','@media screen and (min-width: 1135px)': {
          display:'none',
        },}}
      >
              Contact us
      </Button></Box>
    </Box>
    </>
  )
}

export default Jumbotron