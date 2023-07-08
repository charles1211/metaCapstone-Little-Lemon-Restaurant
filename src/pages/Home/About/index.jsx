import { Box, Grid, Image, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import './style.css';

const About = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Box className='about' id='about-section'>
      <Grid>
        <Text fontSize='4xl' tag='h4' role='Title'>
          Little Lemon Restaurant
        </Text>
        <Text fontSize='1xl' mb='2' tag='h1' role='Description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam velit excepturi
          rerum voluptate iusto eum illum, assumenda nostrum harum.
        </Text>
      </Grid>
      {isLargerThan768 && (
        <Grid>
          <Grid className='image-container'>
            <div className='first-image'>
              <Image
                src='./images/AboutSection/aboutImage1.png'
                alt='A two people talking about food'
                role='img1'
              />
            </div>
            <div className='second-image'>
              <Image
                src='./images/AboutSection/aboutImage2.png'
                alt='A happy person preparing food'
              />
            </div>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default About;
