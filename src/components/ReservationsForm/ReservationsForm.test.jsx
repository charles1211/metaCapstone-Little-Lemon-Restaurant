import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReservationsForm from './index';
import GlobalState from '../../context/GlobalState';

const sampleData = {
  firstName: 'Charles',
  middleName: 'Angulo',
  lastName: 'Cabarrus',
  mobileNo: '+63906660504',
  address: 'Taytay ,Rizal',
  date: '12/11/2023',
  time: '9:00 AM',
  noOfDiners: 2,
};

const onCloseForm = jest.fn();
// const isOpenForm = jest.fn();
const handleSubmit = jest.fn();

describe('Submiting reservation Form', () => {
  beforeEach(() => jest.clearAllMocks());
  it('Rendered in the DOM', () => {
    const onCloseForm = jest.fn();
    render(
      <BrowserRouter>
        <ReservationsForm isOpenForm={true} onClose={onCloseForm} />
      </BrowserRouter>
    );
  });
  it('Submit button', () => {
    render(
      <BrowserRouter>
        <ReservationsForm isOpenForm={true} onClose={onCloseForm} />
      </BrowserRouter>
    );

    // const user = userEvent.setup();
    const firstName = screen.getByRole('textbox', { name: 'First name' });
    const middleName = screen.getByRole('textbox', { name: 'Middle name' });
    const lastName = screen.getByRole('textbox', { name: 'Last name' });
    const mobileNo = screen.getByRole('spinbutton', { name: 'Mobile No.' });
    const address = screen.getByRole('textbox', { name: 'Address' });
    const date = screen.getByRole('time', {
      name: 'Date (Must not be later then current date)',
    });
    const time = screen.getByRole('time', { name: 'Time (Operating Hrs: 8:00 AM - 9:00 PM)' });
    const noOfDiners = screen.getByRole('spinbutton', { name: 'No of Diners' });

    waitFor(
      () => {
        fireEvent.change(firstName, {
          target: { value: sampleData.firstName },
        });
        fireEvent.change(middleName, {
          target: { value: sampleData.middleName },
        });
        fireEvent.change(lastName, {
          target: { value: sampleData.lastName },
        });
        fireEvent.change(mobileNo, {
          target: { value: sampleData.mobileNo },
        });
        fireEvent.change(address, {
          target: { value: sampleData.address },
        });
        fireEvent.change(date, {
          target: { value: sampleData.date },
        });
        fireEvent.change(time, {
          target: { value: sampleData.time },
        });
        fireEvent.change(noOfDiners, {
          target: { value: sampleData.noOfDiners },
        });
      },
      { timeout: 1 }
    );

    // Click Submit Button
    waitFor(() => fireEvent.submit(screen.getByRole('button', { name: 'Submit' })));
    waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(1)); // Expect submit function call once.
  });
});
