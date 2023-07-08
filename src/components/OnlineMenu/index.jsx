import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const OnlineMenu = ({ isOpen, onClose }) => {
  const finalRef = React.useRef(null);
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sample Online Menu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src='../images/menu.jpg' alt='' />
          <ModalFooter bg='white'>
            <Button colorScheme='red' onClick={onClose} ml={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OnlineMenu;
