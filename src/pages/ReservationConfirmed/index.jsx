import { Box, Button, Flex, Grid, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import moment from 'moment';
import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import mainContext from '../../context/mainContext';
import './style.css';

const ReservationConfirmed = () => {
  const { reservationData } = useContext(mainContext);

  const navigate = useNavigate();

  console.log(reservationData);
  if (!reservationData) {
    return <Navigate replace to='/' />;
  }

  const [hours, minutes] = reservationData.time.split(':');

  return (
    <Grid className='Reservation'>
      <Text fontSize='4xl' fontWeight='extrabold' align='center'>
        Reservation Confirmed!
      </Text>
      <Text fontSize='xl' align='center' color='darkGray'>
        Your reservation has been successfully confirmed. Please check your contact number for the
        details and keep it for your reference. We look forward to serving you.
      </Text>
      <Box bg='secondary2' className='reservation-details'>
        <Text fontSize='3xl' fontWeight='medium' align='center'>
          Reservation Details
        </Text>
        <Flex bg='gray.100' justify='center'>
          <VStack spacing={4} p={5}>
            <SimpleGrid columns={2} spacing={10}>
              <Text fontSize='lg' align='left'>
                Reference No :
              </Text>
              <Text fontSize='lg' align='right'>
                {reservationData.ReferenceNo}
              </Text>
              <Text fontSize='lg' align='left'>
                Date :
              </Text>
              <Text fontSize='lg' align='right'>
                {moment(reservationData.date).format('LL')}
              </Text>
              <Text fontSize='lg' align='left'>
                Time :
              </Text>
              <Text fontSize='lg' align='right'>
                {moment(new Date().setHours(hours, minutes)).format('LT')}
              </Text>
              <Text fontSize='lg' align='left'>
                Name :
              </Text>
              <Text fontSize='lg' align='right'>
                {`${reservationData.firstname} ${reservationData.middlename} ${reservationData.lastname}`}
              </Text>
              <Text fontSize='lg' align='left'>
                Contact No. :
              </Text>
              <Text fontSize='lg' align='right'>
                +63 {reservationData.contactNo}
              </Text>
              <Text fontSize='lg' align='left'>
                Address :
              </Text>
              <Text fontSize='lg' align='right'>
                {reservationData.address}
              </Text>
              <Text fontSize='lg' align='left'>
                No. of Diners :
              </Text>
              <Text fontSize='lg' align='right'>
                {reservationData.noOfDiners}
              </Text>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Box>
      <Button
        colorScheme='blue'
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back To Home Page
      </Button>
    </Grid>
  );
};

export default ReservationConfirmed;
