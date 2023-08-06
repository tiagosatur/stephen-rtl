import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', async () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@gmail.com');

  user.click(button);

  // Let's see if the html tree is rendered correctly with jane and jane@gmail
  // screen.debug(undefined, Infinity); // it is okay!

  // Without await findByTestId I think the rerendering processing is not captured.
  const userList = await screen.findByTestId('users-table');

  expect(userList).toBeInTheDocument();

  const name = screen.getByRole('cell', { name: 'jane' });
  const email = screen.getByRole('cell', { name: 'jane@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
