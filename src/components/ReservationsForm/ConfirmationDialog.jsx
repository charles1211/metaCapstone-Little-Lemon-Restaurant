import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

function ConfirmationDialog({ isOpenConfirm, onCloseConfirm }) {
  const navigate = useNavigate();
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      onClose={onCloseConfirm}
      isOpen={isOpenConfirm}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent m='5'>
        <AlertDialogHeader>Are you sure you want to submit?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Please double check your reservation form before you sumbit.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme='blue' onClick={() => navigate('/Reservation-confirmed')}>
            Yes
          </Button>
          <Button onClick={onCloseConfirm} colorScheme='red' ml={3}>
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmationDialog;
