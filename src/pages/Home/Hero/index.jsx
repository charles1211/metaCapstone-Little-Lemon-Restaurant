import { Box, Button, Grid, Image, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ReservationsForm from '../../../components/ReservationsForm';
import mainContext from '../../../context/mainContext';
import './style.css';

const Hero = () => {
  const toast = useToast();
  const context = useContext(mainContext);
  const { isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm } = useDisclosure();

  return (
    <Box className='Section-Hero' bg='primary'>
      <Grid className='Container-Left'>
        <Text className='Heading' fontWeight='extrabold' color='primary2'>
          Little Lemon
        </Text>
        <Text className='subtitle' color='offWhite'>
          Chicago
        </Text>
        <Text className='description' fontSize='1xl' color='offWhite' mb='2'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with
          a modern twist.
        </Text>
        <Button
          id='btn-reserve'
          aria-label='Reserve a Table'
          bg='primary2'
          variant='solid'
          onClick={() => onOpenForm()}
        >
          Reserve a Table
        </Button>
      </Grid>
      <Grid className='Container-Right'>
        <Image className='right-img' src={'../images/restaurant.jpg'} alt='Little Lemon resto' />
      </Grid>
      <ReservationsForm isOpenForm={isOpenForm} onCloseForm={onCloseForm} />
    </Box>
  );
};

export default Hero;
