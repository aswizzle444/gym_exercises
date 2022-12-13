import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FFCC55'
        fontWeight='600'
        fontSize='36px'
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        color='#F2F4F8'
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb='23px'
        mt='20px'
      >
        Sweat, Smile, <br /> and Repeat
      </Typography>
      <Typography
        color='#FFFFFF'
        fontSize='22px'
        lineHeight='35px'
        mb={3}
      >
        Check out our most effective exercises
      </Typography>
      <Button
        variant="contained"
        //color="error"
        href='#exercises'
        sx={{
          backgroundColor: '#AFBCD4',
          padding: '19px'
        }}
      >Explore Exercises</Button>

      <Typography
        fontWeight={600}
        color='#FFCC55'
        sx={{
          opacity: 0.5,
          display: { lg: 'block', xs: 'none' }
        }}
        mt='30px'
        fontSize='200px'
      >
        Exercise
      </Typography>
      <Typography
        fontWeight={600}
        color='#fff'
        sx={{
          opacity: 0.2,
          display: { lg: 'block', xs: 'none' }
        }}
        mt='-253px'
        fontSize='200px'
      >
        Exercise
      </Typography>
      <Typography
        fontWeight={600}
        color='#fff'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        mt='-390px'
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner