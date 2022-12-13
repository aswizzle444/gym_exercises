import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '6px solid #FFCC55' : '',
        backgroundColor: '#C9D3E3',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <img src={Icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />

      <Typography fontSize='26px' fontWeight='bold' color='#363636' textTransform='capitalize' >{item}</Typography>
    </Stack >
  )
}

export default BodyPart