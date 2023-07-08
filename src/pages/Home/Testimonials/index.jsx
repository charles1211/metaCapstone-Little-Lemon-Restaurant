import { Card, CardBody, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import './style.css';
import data from './testimonials';

const Testimonials = () => {
  return (
    <Grid className='Testimonials' id='testomonial-section'>
      <Text fontSize='4xl' fontWeight='extrabold' align='center'>
        Testimonials
      </Text>
      <div className='Testimonials-Carousel'>
        {data.map(({ id, name, review, image }) => (
          <Card maxW='xs' key={id} bg='offWhite' boxShadow='xl'>
            <CardBody>
              <Image src={image} alt={review} borderRadius='lg' />
              <Stack mt='6' spacing='4'>
                <Heading size='md' textTransform='uppercase'>
                  {name}
                </Heading>
                <Text fontSize='lg' color='darkgray'>
                  {review}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </div>
    </Grid>
  );
};

export default Testimonials;
