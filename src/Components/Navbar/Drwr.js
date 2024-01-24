import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    width: '100%',
    minHeight: '400px',
    minWidth: '240px', 
    color: 'white',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          transition: 'transform 2s ease-in-out',
          color:"black",
          mr:1,
          '&:hover': {
            transform: 'scale(1.01)',
          },
        }}
      >
        {open ? <CloseRoundedIcon sx={{fontSize:'35px'}}/> : <MenuRoundedIcon sx={{fontSize:'35px'}}/>}
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{fontFamily:'Poppins',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',mt:2,fontSize:'18px'}}> 
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{fontFamily:'Poppins',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',fontSize:'18px'}}>
          
          About us
        </MenuItem>
        
        <MenuItem onClick={handleClose} disableRipple sx={{fontFamily:'Poppins',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',fontSize:'18px'}}>
        
          Contact us
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{fontFamily:'Poppins',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',fontSize:'18px'}}>
         
          Projects
        </MenuItem>
        <Divider variant='middle' sx={{borderColor:'gray'}}/>
        <MenuItem onClick={handleClose} disableRipple sx={{fontFamily:'Poppins',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',fontSize:'18px'}}>
         
          Other Services
        </MenuItem>
      </StyledMenu>
    </>
  );
}
