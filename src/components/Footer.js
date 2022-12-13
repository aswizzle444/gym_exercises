import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#2B3750'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='body1' pb='40px' mt='5px'>
          Made with 🤍 by Ally
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
