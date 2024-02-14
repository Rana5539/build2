import { Box, Button } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const img = require('./images/Rectangle 19.png')
const img1 = require('./images/Rectangle 20.png')
const img2 = require('./images/Rectangle 21.png')
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 270,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 14,
  p: 4,
  color:'white',borderRadius:'25px',
};
function Cards() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    const [value] = React.useState(4);
  return (
    <>
    <Box sx={{
        display:'flex', 
        justifyContent:'space-between',
        width:'90%',
        height:'auto',
        mx:'auto',
        mt:4,mb:3,
        alignItems:'center',
        '@media screen and (max-width: 1170px)':{
            flexDirection:"column",
        }}} >
    <div data-aos="flip-right"><Card sx={{ 
        maxWidth: 345, 
        border:'1px solid rgb(133, 212, 238)',
        borderRadius:'15px',
        cursor:"pointer",
        transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-10px)',
  
  },}} onClick={handleOpen}>
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
   </div>
   {/* card 2 */}
   <div data-aos="zoom-in">
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
  },}} onClick={handleOpen}>
         <CardMedia>
        <img src={img1} width={'100%'} alt=''></img>
        </CardMedia>
           <CardContent>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:'600'}}>Tuscan Style</Typography>
       <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Inria Sans',mt:1}}>
         Tuscan style 1 kanal house its our recent project of this year one of the most demanding  project ever you will find .
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
   </Card></div>
   {/* card 3 */}
   <div data-aos="flip-left">
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
  },}} onClick={handleOpen}>
         <CardMedia>
        <img src={img2} width={'100%'} alt=''></img>
        </CardMedia>
           <CardContent>
            <Typography sx={{
                fontFamily:'Poppins',
                fontWeight:'600'}}>Mediterranean Style</Typography>
       <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Inria Sans',mt:1}}>
       Mediterranean style 1 kanal house only one project in city designed by us in lahore contact us to visit this project
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
   </Card></div>

    </Box>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ textAlign:'justify',fontFamily:'Poppins' }}>
             To visit our projects contact us and get more information
            </Typography>
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
  },}} component={Link} to="/contact">Contact</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  )
}

export default Cards