import { createContext } from 'react';

const context = {
  reservationData: undefined,
  setReservationData: () => {
    throw Error('Not Implemented');
  },
};

export default createContext(context);
