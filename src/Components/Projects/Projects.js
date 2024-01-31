import { Button, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'

function Projects() {
  return (
    <>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500'}}>Our Recent Projects</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>Best Projects of the year</Typography>
    <Cards/>
    </>
  )
}
export default Projects