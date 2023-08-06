import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

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
