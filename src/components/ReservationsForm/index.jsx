import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { initialValues, schema } from './reservationForm';

import cuid from 'cuid';
import moment from 'moment';
import mainContext from '../../context/mainContext';
import ConfirmationDialog from './ConfirmationDialog';

const ReservationsForm = ({ isOpenForm, onCloseForm }) => {
  const finalRef = React.useRef(null);
  const toast = useToast();
  const context = useContext(mainContext);
  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();

  const handleSubmit = (values) => {
    const [hours, minutes] = values.time.split(':');
    const startTime = moment().set('hour', 8).set('minute', 0).set('second', 0);
    const endTime = moment().set('hour', 21).set('minute', 1).set('second', 0);

    try {
      // Date Validation
      if (moment(values.date).isAfter(moment()) || moment(values.date).isSame(moment(), 'day')) {
        // Time Validation
        if (moment(new Date().setHours(hours, minutes)).isBetween(startTime, endTime)) {
          values.ReferenceNo = cuid();
          context.setReservationData(values);

          onOpenConfirm();
        } else {
          toast({
            title: 'Invalid Reservation Time.',
            description: 'Selected time must be 8:00 AM - 9:00 PM',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top',
          });
        }
      } else {
        toast({
          title: 'Invalid Reservation Date.',
          description: 'Selected date must be greater or equal to current date.',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpenForm} onClose={onCloseForm} size='2xl'>
      <ModalOverlay />
      <ModalContent h='800px' overflow='auto' m='5'>
        <ModalHeader>Reservation Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            {({ errors, touched }) => (
              <Form noValidate autoComplete='off'>
                <Flex bg='gray.100' align='center' justify='center'>
                  <Box bg='white' prounded='md' w={'100%'}>
                    <VStack spacing={4} align='flex-start'>
                      <FormControl isInvalid={!!errors.firstname && touched.firstname}>
                        <FormLabel htmlFor='firstname'>First name</FormLabel>
                        <Field
                          as={Input}
                          id='firstname'
                          name='firstname'
                          variant='filled'
                          label='First Name'
                        />
                        <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.middlename && touched.middlename}>
                        <FormLabel htmlFor='middlename'>Middle name </FormLabel>
                        <Field as={Input} id='middlename' name='middlename' variant='filled' />
                        <FormErrorMessage>{errors.middlename}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.lastname && touched.lastname}>
                        <FormLabel htmlFor='lastname'>Last name</FormLabel>
                        <Field as={Input} id='lastname' name='lastname' variant='filled' />
                        <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.contactNo && touched.contactNo}>
                        <FormLabel htmlFor='contactNo'>Mobile No.</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents='none' children={<Text>+63</Text>} />
                          <Field
                            as={Input}
                            id='contactNo'
                            name='contactNo'
                            type='number'
                            variant='filled'
                            sx={{ pl: 35 }}
                          />
                        </InputGroup>
                        <FormErrorMessage>{errors.contactNo}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.address && touched.address}>
                        <FormLabel htmlFor='address'>Address</FormLabel>
                        <Field
                          as={Textarea}
                          id='address'
                          name='address'
                          type='address'
                          variant='filled'
                        />
                        <FormErrorMessage>{errors.address}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.date && touched.date}>
                        <FormLabel htmlFor='date'>
                          Date (Must not be later then current date)
                        </FormLabel>
                        <Field
                          as={Input}
                          id='date'
                          name='date'
                          type='date'
                          variant='filled'
                          role='time'
                        />
                        <FormErrorMessage>{errors.date}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.time && touched.time}>
                        <FormLabel htmlFor='time'>
                          Time (Operating Hrs: 8:00 AM - 9:00 PM)
                        </FormLabel>
                        <Field
                          as={Input}
                          id='time'
                          name='time'
                          type='time'
                          variant='filled'
                          role='time'
                        />
                        <FormErrorMessage>{errors.time}</FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.noOfDiners && touched.noOfDiners}>
                        <FormLabel htmlFor='noOfDiners'>No of Diners</FormLabel>
                        <Field
                          as={Input}
                          id='noOfDiners'
                          name='noOfDiners'
                          type='number'
                          variant='filled'
                        />
                        <FormErrorMessage>{errors.noOfDiners}</FormErrorMessage>
                      </FormControl>
                    </VStack>
                  </Box>
                </Flex>
                <ModalFooter bg='white'>
                  <Button colorScheme='blue' type='submit' name='submit'>
                    Submit
                  </Button>
                  <Button colorScheme='red' onClick={onCloseForm} ml={3}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
      <ConfirmationDialog isOpenConfirm={isOpenConfirm} onCloseConfirm={onCloseConfirm} />
    </Modal>
  );
};

export default ReservationsForm;
