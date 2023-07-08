import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('components/Header', () => {
  describe('Screen width greater than 768px', () => {
    it('Rendered in the DOM', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const HeaderEl = screen.getByRole('Region');
      expect(HeaderEl).toBeInTheDocument();
    });

    it('Default Elements ', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const logo = screen.getByAltText('Little Lemon Logo');
      const menubars = screen.getByTitle('Menubars');
      const userIcon = screen.getByRole('userIcon');
      const cartIcon = screen.getByRole('cartIcon');
      expect(logo).toBeInTheDocument();
      expect(menubars.length).toStrictEqual();
      expect(userIcon).toBeInTheDocument();
      expect(cartIcon).toBeInTheDocument();
    });
  });
});
