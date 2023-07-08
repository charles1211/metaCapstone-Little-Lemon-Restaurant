import { render, screen } from '@testing-library/react';

import ErrorPage from './index';

it('Rendered in the DOM', () => {
  render(<ErrorPage />);
  const ErrorEl = screen.getByRole('alert');
  expect(ErrorEl).toBeInTheDocument();
});
