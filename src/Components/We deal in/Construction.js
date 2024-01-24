import { Box, Typography } from '@mui/material'
import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';
function Construction() {
  return (
    <>
     <Box>
      <Box sx={{width:'20vh',height:'20vh',bgcolor:'rgb(133, 212, 238)',borderRadius:'50%',alignItems:'center',m:'auto',justifyContent:'center',display:'flex',transition:'0.4s',cursor:'pointer','&:hover': {
    transform:'scale(1.05)',
  },
  '@media screen and (max-width : 615px)':{
    mt:2,
    width:'15vh',
    height:'15vh'
  }}}>
<ConstructionIcon sx={{fontSize:'60px',color:"black"}}/>
      </Box>
      <Typography sx={{textAlign:'center',fontSize:'17px',fontFamily:'Poppins',fontWeight:'500',mt:1}}>Construction</Typography>
      <Typography sx={{fontFamily:'Inria Sans',color:'grey',textAlign:'center'}}>We also deals in construction projects</Typography>
      </Box>
    </>
  )
}

export default Construction