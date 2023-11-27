import { useState } from 'react';
import '../../App.css';
import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className='App'>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
