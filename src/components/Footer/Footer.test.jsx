import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index';

it('Rendered in the DOM', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const FooterEl = screen.getByRole('region');
  expect(FooterEl).toBeInTheDocument();
  const ImageEl = screen.getByAltText('Logo');
  expect(ImageEl).toBeInTheDocument();
  const MenuLinkEl = screen.getByRole('MenuLink');
  expect(MenuLinkEl).toBeInTheDocument();
});
