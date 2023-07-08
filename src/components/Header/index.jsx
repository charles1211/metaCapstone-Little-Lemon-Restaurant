import { faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import useScrollDirectionHook from '../../hooks/useScrollDirectionHook';
import './style.css';
import innerLinks from './headerLinks';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const boxRef = useRef();
  const [scrollDirection, handlerOnTransitionEnd] = useScrollDirectionHook(boxRef);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      navigate('/');
    }
    onToggle();
  };

  return (
    <Box
      position='sticky'
      top={0}
      left={0}
      right={0}
      transform={'translateY(var(--chakra-translate-y))'}
      translateY={scrollDirection === 'up' ? 0 : -200}
      zIndex={10}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='offWhite'
      onTransitionEnd={handlerOnTransitionEnd}
      ref={boxRef}
      role='Region'
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <Stack
          px={isLargerThan768 ? 16 : 4}
          py={4}
          justifyContent='space-between'
          alignItems={isLargerThan768 ? 'center' : null}
          direction={['column', 'column', 'row']}
        >
          {scrollDirection}
          {isLargerThan768 && (
            <>
              <div className='logo'>
                <Image src='../littleLemonLogo.png' alt='Little Lemon Logo' />
              </div>
              <nav title='Menubars'>
                <HStack spacing={8}>
                  {innerLinks.map(({ text, anchor }) => (
                    <Button
                      variant='link'
                      color='primary'
                      fontWeight='extrabold'
                      textTransform='uppercase'
                      key={anchor}
                      onClick={handleClick(anchor)}
                    >
                      {text}
                    </Button>
                  ))}
                </HStack>
              </nav>
              <nav>
                <IconButton
                  aria-label='user'
                  icon={<FontAwesomeIcon icon={faUserCircle} size='2x' />}
                  role='userIcon'
                />
                <IconButton
                  aria-label='cart'
                  icon={<FontAwesomeIcon icon={faCartShopping} size='2x' />}
                  role='cartIcon'
                />
              </nav>
            </>
          )}
          {!isLargerThan768 && (
            <Box>
              <Flex align={'center'}>
                <Flex
                  flex={{ base: 1, md: 'auto' }}
                  ml={{ base: -2 }}
                  display={{ base: 'flex', md: 'none' }}
                >
                  <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={7} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                  <Image className='logo' src='../littleLemonLogo.png' alt='Little Lemon Logo' />
                </Flex>

                <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'}>
                  <IconButton
                    aria-label='Account'
                    icon={
                      <FontAwesomeIcon icon={faUserCircle} size={isLargerThan768 ? '2xl' : 'xl'} />
                    }
                  />
                  <IconButton
                    aria-label='Cart'
                    icon={
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size={isLargerThan768 ? '2xl' : 'xl'}
                      />
                    }
                  />
                </Stack>
              </Flex>
              {isOpen && <MobileNav handleClick={handleClick} />}
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;

const MobileNav = ({ handleClick }) => {
  return (
    <Stack
      bg='white'
      p={4}
      display={{ md: 'none' }}
      position='absolute'
      sx={{ left: 0, width: '100%', top: 16 }}
    >
      {innerLinks.map((link) => (
        <MobileNavItem key={link.anchor} link={link} handleClick={handleClick} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ link, handleClick }) => {
  return (
    <Stack spacing={4} onClick={handleClick(link.anchor)}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color='primary'>
          {link.text}
        </Text>
      </Flex>
    </Stack>
  );
};
