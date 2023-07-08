import React, { useReducer } from 'react';

import Context from './mainContext';
import { reducer, SET_RESERVATIONDATA } from './reducers';

const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    reservationData: null,
  });

  const setReservationData = (reservationData) => {
    dispatch({ type: SET_RESERVATIONDATA, reservationData });
  };

  return (
    <Context.Provider
      value={{
        reservationData: state.reservationData,
        setReservationData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
