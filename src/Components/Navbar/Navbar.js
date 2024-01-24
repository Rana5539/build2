import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
const img = require('./images/pngwing.com (16).png')
function Navbar() {
  const nav = [
    { text: 'Home', },
    { text: 'About us',  }, 
    { text: 'Contact us', },
    { text: 'Projects',  }, 
  ];
 
  return (
    <>
      <Box
        sx={{
          width: '95%',
          height: '9vh',
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          bgcolor:'rgba(251, 217, 185, 1)',
         
          borderRadius:'0px 0px 35px 35px',
          justifyContent: 'space-between',
          '@media screen and (max-width: 700px)': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            color: 'black',
            fontFamily: 'Tilt Neon',
            fontSize: '25px',
            display: 'flex',
            alignItems: 'center',
            ml:2,
            fontWeight:'600'
          }}
        >
          <img src={img} style={{height:'9vh'}} alt=''></img>
          BUILD
        </Typography>
        <Box sx={{
  display: 'flex',
  mx: 'auto',
  'a:not(:last-child)': {
    marginRight: 4, 
  },
}}>
  {nav.map((data) => (
    <Link
      key={data.text}
      sx={{
        fontSize:"17px",
        color: 'black',
        fontFamily: 'Inria Sans',
        textDecoration: 'none',
        cursor: 'pointer',
        ':hover': {
         color:"rgb(133, 212, 238)",
          transition: '0.3s',
        },
      }}
        >
      {data.text}
    </Link>
  ))}
</Box>
      <Button
        sx={{textTransform:"none",mr:3, color:"black",backgroundImage: 'linear-gradient(to right,white, rgba(193, 222, 232, 1))', fontFamily:'Poppins',fontSize:'16px',borderRadius:'20px',pr:2,pl:2}}
      >
              Services
      </Button>
         </Box>

</>
);
}

export default Navbar;
