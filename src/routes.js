import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import ReservationConfirmed from '../src/pages/ReservationConfirmed';

export const Main = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Reservation-confirmed', index: true, element: <ReservationConfirmed /> },
    ],
  },
]);

export default router;
