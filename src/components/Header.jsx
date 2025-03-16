import React from 'react'
import './Header.css' 

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </Typography>
        <Link
          to="/employee-management"
          style={{ color: '#fff', textDecoration: 'none', marginLeft: '1rem' }}
        >
          Employee Management
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


