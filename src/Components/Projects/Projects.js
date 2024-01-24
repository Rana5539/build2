import { Button, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'

function Projects() {
  return (
    <>
    <Typography sx={{textAlign:'center',mt:4,fontSize:'30px',fontFamily:'Poppins',fontWeight:'500'}}>Our Recent Projects</Typography>
    <Typography sx={{textAlign:'center',fontSize:'15px',fontFamily:'Inria Sans',fontWeight:'500',color:'grey'}}>Best Projects of the year</Typography>
    <Cards/>
    <div style={{ textAlign: 'center' }}>
      <Button size='large'
        variant='outlined'
        sx={{
          textTransform: 'none',
          fontFamily: 'Poppins',
          color: 'black',
          fontSize: '16px',
          mx: 'auto',
          display: 'block',
          bgcolor: 'rgb(133, 212, 238)',
          border: 'none',
          mt: 3,
          borderRadius: '20px',
          ':hover': {
            bgcolor: 'rgb(133, 212, 238)',
            border: 'none',
          },
        }}
      >
        View all
      </Button>
    </div>
    </>
  )
}
export default Projects