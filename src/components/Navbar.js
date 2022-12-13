import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '69px', xs: '' }, mt: {
          sm: '10px', xs: '10px'
        }, justifyContent: 'none'
      }}
      px='20px'

    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo'
          style={{ width: '88px', height: '88px', margin: '0 0px' }}
          variant="h1"
        />
      </Link>

      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#F5F5F5', borderBottom: '4px solid #FFCC55' }} variant='h3' >Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#F5F5F5' }}>Exercises</a>
      </Stack>
    </Stack >
  )
}

export default Navbar