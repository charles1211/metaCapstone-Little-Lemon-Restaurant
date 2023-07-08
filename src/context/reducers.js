export const SET_RESERVATIONDATA = 'SET_RESERVATIONDATA';

const setReservationData = (reservationData, state) => {
  return { ...state, reservationData };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESERVATIONDATA:
      return setReservationData(action.reservationData, state);
    default:
      return state;
  }
};
