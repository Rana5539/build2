import { Box, Typography } from '@mui/material'
import React from 'react'
import Buy from './Buy'
import './not.css'
import SellOutlined from '@mui/icons-material/SellOutlined';
import Construction from './Construction';
function Sells() {
  return (
    <>
    <Box sx={{width:'100%',background: 'linear-gradient(to bottom, lightcyan, white)',pb:3,borderRadius:'25px'}} className='c'>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500',pt:2}}>Services</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>These are some services we provide in Real State</Typography>
    <Box sx={{width:'90%',height:'auto',display:'flex',justifyContent:'space-evenly',alignItems:'center',mt:5,mx:'auto','@media screen and (max-width : 615px)':{
      flexDirection:"column"
    }}}>
      <Box>
      <Box sx={{width:'20vh',height:'20vh',bgcolor:'rgb(133, 212, 238)',borderRadius:'50%',alignItems:'center',m:'auto',justifyContent:'center',display:'flex',transition:'0.4s',cursor:'pointer','&:hover': {
    transform:'scale(1.05)',
   
  },'@media screen and (max-width : 615px)':{
    
    width:'15vh',
    height:'15vh'
  }}} >
<SellOutlined sx={{fontSize:'60px',color:"black"}}/>
      </Box>
      <Typography sx={{textAlign:'center',fontSize:'17px',fontFamily:'Poppins',fontWeight:'500',mt:1}}>Sell Property</Typography>
      <Typography sx={{fontFamily:'Inria Sans',color:'grey',textAlign:'center'}}>Contact us to get price for your house</Typography>
      </Box>
      <Buy/>
      <Construction/>
    </Box>
    
    </Box>
    </>
  )
}
export default Sells