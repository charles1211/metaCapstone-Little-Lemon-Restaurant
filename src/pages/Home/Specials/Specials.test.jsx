import { render, screen } from '@testing-library/react';
import Specials from './index';
import specials from './specials';

describe('components/Specials', () => {
  describe('<Specials />', () => {
    it('Rendered in the DOM', () => {
      render(<Specials data={specials} />);
      const SpecialsEl = screen.getByText('Specials');
      expect(SpecialsEl).toBeInTheDocument();
    });
  });
});
