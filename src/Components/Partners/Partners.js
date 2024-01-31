import React from 'react';
import { Box, Typography } from '@mui/material';

const arr = [
  { text: 'Elegant Properties', src: require('./images/building.png'), link: 'https://elegantdha.com/' },
  { text: 'Royal Estate', src: require('./images/real-estate-agency.png'), link: 'https://royalestate.com.pk/' },
  { text: 'Chohan Estate', src: require('./images/real-estate.png'), link: 'https://www.chohanestate.com/' },
];

function Partners() {
  return (
    <>
      <Typography sx={{ textAlign: 'center', mt: 4, fontSize: '30px', fontFamily: 'Poppins', fontWeight: '500', pt: 2 }}>
        Our Partners
      </Typography>
      <Typography sx={{ textAlign: 'center', fontSize: '15px', fontFamily: 'Inria Sans', fontWeight: '500', color: 'grey' }}>
        These brands have collaborated with us
      </Typography>

      <Box
        sx={{
          width: '100%',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          mt: 4,
          justifyContent: 'space-evenly',
          background: 'linear-gradient(to bottom, rgba(251, 217, 185, 1), white)',
          pb: 3,
          '@media screen and (max-width : 500px)': {
            flexDirection: 'column',
          },
        }}
      >
        {arr.map((data) => (
          <Box key={data.text} sx={{ textAlign: 'center', mt: 4 }}>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={data.src} height={'75px'} alt="" />
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500', mt: 1 }}>{data.text}</Typography>
            </a>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Partners;
