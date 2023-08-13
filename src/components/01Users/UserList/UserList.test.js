import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  const { container, ...rest } = render(<UserList users={users} />);

  return { users, container, ...rest };
}

test('render one row per user 01', () => {
  // Render the component
  // const users = [
  //   { name: 'jane', email: 'jane@jane.com' },
  //   { name: 'sam', email: 'sam@sam.com' },
  // ];
  // render(<UserList users={users} />);

  // Abstract the rendering of the component to a function and reuse it
  renderComponent();

  // Find all the rows in the table

  // You can get a help from logTestingPlayground find the
  // correct selector
  // get help from logTestingPlayground to find all different roles you can use
  // screen.logTestingPlaygroundURL();

  // This was its suggestion
  //   screen.getByRole('row', {
  //     name: /jane jane@jane\.com/i
  //   })

  // There are 3 rows, one from head
  // const rows = screen.getAllByRole('row');
  const rows = within(screen.getByTestId('users-table-body')).getAllByRole(
    'row'
  );

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render one row per user 02', () => {
  // Render the component
  // const users = [
  //   { name: 'jane', email: 'jane@jane.com' },
  //   { name: 'sam', email: 'sam@sam.com' },
  // ];
  // const { container } = render(<UserList users={users} />);
  const { container } = renderComponent();

  // Find all the rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render email and name of each user', () => {
  // Render the component
  // const users = [
  //   { name: 'jane', email: 'jane@jane.com' },
  //   { name: 'sam', email: 'sam@sam.com' },
  // ];
  // render(<UserList users={users} />);

  const { users } = renderComponent();

  // Find all the rows in the table and assert text is displayed
  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
