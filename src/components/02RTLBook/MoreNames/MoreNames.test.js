import { render, screen } from '@testing-library/react';
import { MoreNames } from './MoreNames';

test('Shows email and search input', () => {
  render(<MoreNames />);
  // Different from buttons, we can't write text between open and closing
  // input tags. We have to use label tag, and put an id in the input.

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const searchInput = screen.getByRole('textbox', {
    name: /search/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
