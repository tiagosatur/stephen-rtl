import { useState } from 'react';
import './App.css';
import UserForm from './components/01Users/UserForm/UserForm';
import UserList from './components/01Users/UserList/UserList';

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
