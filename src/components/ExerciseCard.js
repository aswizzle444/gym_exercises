import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card'
      to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{ ml: '21px', color: '#fff', background: '#7A8FB8', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', position: 'center' }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{ ml: '21px', color: '#666666', background: '#FFDA85', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', alignItems: 'center' }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#666666'
        fontWeight='bold'
        mt='11px'
        pb='10px'
        pr='10px'
        pl='10px'
        textTransform='capitalize'
        fontSize='20px'
      > {exercise.name} </Typography>
    </Link>
  )
}

export default ExerciseCard 