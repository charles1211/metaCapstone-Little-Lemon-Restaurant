import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import OnlineMenu from '../../../components/OnlineMenu';
import './style.css';
import data from './specials';

const Specials = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid className='Specials' id='special-section'>
      <div className='specials-titlebar'>
        <Text fontSize='4xl' fontWeight='extrabold'>
          Specials
        </Text>
        <Button id='btn-menu' bg='primary2' onClick={() => onOpen()}>
          Online Menu
        </Button>
      </div>

      <div id='Section-SpecialItems'>
        {data.map(({ id, title, price, description, image }) => (
          <Card maxW='sm' key={id} bg='offWhite' boxShadow='xl'>
            <CardBody>
              <Image src={image} alt={description} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading size='md' textTransform='uppercase'>
                  {title}
                </Heading>
                <Text fontSize='lg' color='darkgray'>
                  {description}
                </Text>
                <Text color='' fontSize='2xl'>
                  {price}
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <Button variant='solid' bgColor='primary2' id='btn-Buynow'>
                Order
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <OnlineMenu isOpen={isOpen} onClose={onClose} />
    </Grid>
  );
};

export default Specials;
