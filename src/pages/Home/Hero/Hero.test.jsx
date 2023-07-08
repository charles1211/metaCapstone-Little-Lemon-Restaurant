import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './index';

const mockedUsedOpenForm = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  onOpenForm: () => mockedUsedOpenForm,
}));

it('Rendered in the DOM', () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const heroHeadingEl = screen.getByText('Little Lemon');
  expect(heroHeadingEl).toBeInTheDocument();
});

it('Button functionality', () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);
  expect(mockedUsedOpenForm).toBeCalledTimes(0);
});
