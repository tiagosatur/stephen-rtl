import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const onChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    onUserAdd(values);
    setValues({
      name: '',
      email: '',
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={onChange}
          value={values.name}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='text'
          onChange={onChange}
          value={values.email}
        />
      </div>
      <div>
        <button type='submit'>Add user</button>
      </div>
    </form>
  );
}

export default UserForm;
