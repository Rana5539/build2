import { Box, Button } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
const img = require('./images/Rectangle 19.png')
const img1 = require('./images/Rectangle 20.png')
const img2 = require('./images/Rectangle 21.png')
function Cards() {
    const [value] = React.useState(4);
  return (
    <>
    <Box sx={{
        display:'flex', 
        justifyContent:'space-between',
        width:'90%',
        height:'auto',
        mx:'auto',
        mt:4,
        alignItems:'center',
        '@media screen and (max-width: 1170px)':{
            flexDirection:"column",
        }}} >
    <Card sx={{ 
        maxWidth: 345, 
        border:'1px solid rgb(133, 212, 238)',
        borderRadius:'15px',
        cursor:"pointer",
        transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-10px)',
  
  },}} >
         <CardMedia>
        <img src={img} width={'100%'} alt=''></img>
        </CardMedia>
           <CardContent>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:'600'}}>Spanish Style</Typography>
       <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Inria Sans',mt:1}}>
         Spanish style 1 kanal house its our recent project of this year one of the most luxirious and stylish project ever.
       </Typography>
       <Box
      sx={{ mt:1,
        '& > legend': { mt: 4 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
    <Button variant='outlined' sx={{
        textTransform:'none',
        fontFamily:'Poppins',
        color:'black',
        fontSize:"16px",
        width:'90px',
        bgcolor:'rgba(251, 217, 185, 1)',
        border:'none',
        mt:2,
        borderRadius:"20px",':hover': {
    bgcolor:'rgba(251, 217, 185, 1)',
    border:'none'
  },}}>View</Button>
     </CardContent>
   </Card>

   {/* card 2 */}
   <Card sx={{ 
    maxWidth: 345, 
    border:'1px solid rgb(133, 212, 238)',
    borderRadius:'15px',
    cursor:"pointer",
    transition: 'transform 0.3s ease',
    '@media screen and (max-width: 1170px)':{
       mt:2
    },
  ':hover': {
    transform: 'translateY(-10px)',
  },}}>
         <CardMedia>
        <img src={img1} width={'100%'} alt=''></img>
        </CardMedia>
           <CardContent>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:'600'}}>Spanish Style</Typography>
       <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Inria Sans',mt:1}}>
         Spanish style 1 kanal house its our recent project of this year one of the most luxirious and stylish project ever.
       </Typography>
       <Box
      sx={{ mt:1,
        '& > legend': { mt: 4 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
    <Button variant='outlined' sx={{
        textTransform:'none',
        fontFamily:'Poppins',
        color:'black',
        fontSize:"16px",
        width:'90px',
        bgcolor:'rgba(251, 217, 185, 1)',
        border:'none',
        mt:2,
        borderRadius:"20px",':hover': {
    bgcolor:'rgba(251, 217, 185, 1)',
    border:'none'
  },}}>View</Button>
     </CardContent>
   </Card>
   {/* card 3 */}
   <Card sx={{ 
    maxWidth: 345, 
    border:'1px solid rgb(133, 212, 238)',
    borderRadius:'15px',
    cursor:"pointer",
    transition: 'transform 0.3s ease',
    '@media screen and (max-width: 1170px)':{
        mt:2
     },
  ':hover': {
    transform: 'translateY(-10px)',
  },}}>
         <CardMedia>
        <img src={img2} width={'100%'} alt=''></img>
        </CardMedia>
           <CardContent>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:'600'}}>Spanish Style</Typography>
       <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Inria Sans',mt:1}}>
         Spanish style 1 kanal house its our recent project of this year one of the most luxirious and stylish project ever.
       </Typography>
       <Box
      sx={{ mt:1,
        '& > legend': { mt: 4 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
    <Button variant='outlined' sx={{
        textTransform:'none',
        fontFamily:'Poppins',
        color:'black',
        fontSize:"16px",
        width:'90px',
        bgcolor:'rgba(251, 217, 185, 1)',
        border:'none',
        mt:2,
        borderRadius:"20px",':hover': {
    bgcolor:'rgba(251, 217, 185, 1)',
    border:'none'
  },}}>View</Button>
     </CardContent>
   </Card>

    </Box>
   
    </>
  )
}

export default Cards