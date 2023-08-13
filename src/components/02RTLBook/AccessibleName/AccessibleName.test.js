import { render, screen } from '@testing-library/react';
import AccessibleName from './AccessibleName';

test('Can select by accessible name', () => {
  render(<AccessibleName />);
  // The accessible name it is the text inside it
  // Use a regular expression (regex) to be case insensitive
  const submitButton = screen.getByRole('button', { name: /submit/i });
  const cancelButton = screen.getByRole('button', { name: /cancel/i });

  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});
