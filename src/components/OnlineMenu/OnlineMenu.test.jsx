import { render, screen, fireEvent } from '@testing-library/react';
import OnlineMenu from './index';

it('Rendered in the DOM', () => {
  render(<OnlineMenu />);
  const ModalEl = screen.getByRole('generic');
  expect(ModalEl).toBeInTheDocument();
});
