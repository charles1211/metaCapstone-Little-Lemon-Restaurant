import { render, screen } from '@testing-library/react';
import About from './index';

it('Rendered in the DOM', () => {
  render(<About />);
  const TitleEl = screen.getByRole('Title');
  expect(TitleEl).toBeInTheDocument();
  const DescriptionEl = screen.getByRole('Description');
  expect(DescriptionEl).toBeInTheDocument();
});
