import React from 'react';
import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FixedIcons = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: '30%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        
       
      }}
    >
      <IconButton
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon sx={{fontSize:'30px',color:'blue'}}/>
      </IconButton>
      <IconButton
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon sx={{fontSize:'30px',color:'crimson'}}/>
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon sx={{fontSize:'30px',color:'dodgerblue'}} />
      </IconButton>
    </Box>
  );
};

export default FixedIcons;
