function UserList({ users }) {
  if (!users.length) return null;

  return (
    <table data-testid='users-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid='users-table-body'>
        {users.map(({ name, email }, i) => {
          return (
            <tr key={`table-row-${i}`}>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserList;
