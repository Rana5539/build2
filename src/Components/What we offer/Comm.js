import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const arr = [
  { text: 'Small', text1: 'Offices' },
  { text: 'New', text1: 'Offices' },
  { text: 'On Installments', text1: 'Shops' },
  { text: 'Small', text1: 'Shops' },
  { text: 'New', text1: 'Shops' },
  { text: 'Running', text1: 'Shops' },
];

const arr1 = ['Office', 'Shops', 'Building', 'Warehouse', 'Factory', 'Others'];

const arr2 = [
  'Less than 100 sq ft ',
  '100-200 sq ft',
  '200-300 sq ft',
  '300-400 sq ft',
  '400-500 sq ft',
  'More than 500 sq ft',
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const fadeIn = useSpring({
    opacity: value === index ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={fadeIn}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </animated.div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Comm() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div data-aos='fade-up'>
      <Box sx={{ width: 'auto', p: 1, borderRadius: '15px',  border:'1px solid rgb(133, 212, 238)', }}>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: '500', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <ApartmentIcon sx={{ mr: 1, fontSize: '30px', color: 'dodgerblue' }} />
          Commercial
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                '& .MuiTabs-indicator': { display: 'none' },
                '& .Mui-selected': { color: 'dodgerblue' },
              }}
              centered
            >
              <Tab label="Popular" {...a11yProps(0)} sx={{ textTransform: 'none', fontFamily: 'Poppins' }} />
              <Tab label="Kind of" {...a11yProps(1)} sx={{ textTransform: 'none', fontFamily: 'Poppins' }} />
              <Tab label="Area" {...a11yProps(2)} sx={{ textTransform: 'none', fontFamily: 'Poppins' }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box>
              {arr.map((data) => (
                <Typography sx={{ display: 'flex', fontFamily: 'Inria Sans', fontWeight: '600' }}>
                  {data.text} <Typography sx={{ ml: 0.5, fontFamily: 'Inria Sans', color: 'grey' }}>{data.text1}</Typography>
                </Typography>
              ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box>
              {arr1.map((data) => (
                <Typography sx={{ display: 'flex', fontFamily: 'Inria Sans', fontWeight: '600' }}>{data}</Typography>
              ))}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box>
              {arr2.map((data) => (
                <Typography sx={{ display: 'flex', fontFamily: 'Inria Sans', fontWeight: '600' }}>{data}</Typography>
              ))}
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
      </div>
    </>
  );
}
