import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 300); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '22px',
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',borderRadius:'100%'
      }}
      onClick={scrollToTop}
    >
      <KeyboardDoubleArrowUpRoundedIcon sx={{fontSize:'50px',color:' rgba(251, 217, 185, 1)'}} />
    </div>
  );
};

export default ScrollToTop;
