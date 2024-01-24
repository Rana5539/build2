import { Box, Typography } from '@mui/material'
import React from 'react'
import Comm from './Comm'
import Plots from './Plots'
import Homes from './Homes'
function Main() {
  return (
    <>
   <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500',pt:2}}>Properties</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>We deals in these types of properties</Typography>
    <Box sx={{width:'90%',height:'auto',display:'flex',justifyContent:'space-evenly',alignItems:'center',mt:5,mx:'auto','@media screen and (max-width : 1150px)':{
      flexDirection:"column"
    }}}>
        <Comm />
        <Plots/>
        <Homes/>
    </Box>
    </>
  )
}

export default Main