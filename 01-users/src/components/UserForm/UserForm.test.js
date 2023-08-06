/*
Most important parts of UserForm:
- Show two inputs and one button
- Entering a name + email and then submitting the form causes 
the 'onUserAdd'callback to be called
*/
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and one button', async () => {
  // Step 1 - Render the component
  render(<UserForm />);

  // Step 2 - Manipulate the component or find an element in it (simulate typing or click)
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Step 3 - make an assertion - make sure the component is doing whtat is expected (call calback, shows el on screen...)
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd on the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION
  // Need to verify what callback passed down as prop
  // gets called with the correct values
  // This is the hacky way
  // const argList = [];

  // const callback = (...args) => {
  //   argList.push(args);
  // };

  // Better way is using a mock function
  const mock = jest.fn();

  // Try to render my component
  // render(<UserForm onUserAdd={callback} />);
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  // If we decide to reorder these inputs this will break
  // const [nameInput, emailInput] = screen.getAllByRole('textbox');

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Simulate types in a name
  user.click(nameInput);
  user.keyboard('jane');

  // Simulate types in an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  // Find a button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make suer 'onUserAdd' gets called with email and name
  // Hacky way
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });

  // Better way
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});

test('inputs have been cleared out after submitting', () => {
  const mock = jest.fn();

  const { rerender } = render(<UserForm onUserAdd={() => {}} />);

  // Find the two inputs and the button
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  // Simulate types in a name
  user.click(nameInput);
  user.keyboard('jane');

  // Simulate types in an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  // Simulate clicking the button
  user.click(button);

  // Inputs have been cleared out
  rerender(<UserForm onUserAdd={mock} />);
  expect(nameInput.value).toEqual('');
  // Alternatively:
  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
