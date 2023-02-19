import React from 'react';
import useHandleInput from '../utils/handleInput';
import PropTypes from 'prop-types';

function FormSignUp({ AddUser }) {
  const [name, eventInputName] = useHandleInput('');
  const [email, eventInputEmail] = useHandleInput('');
  const [password, eventInputPassword] = useHandleInput('');

  const eventSubmit = (e) => {
    e.preventDefault();
    AddUser({ name, email, password });
  };

  return (
    <form action="/register" method="post" id="form" onSubmit={eventSubmit}>
      <div className="name">
        <input type="text" name="name" id="note-title" placeholder="input name..." value={name} required onChange={eventInputName} />
      </div>
      <div className="email">
        <input type="email" name="email" id="note-title" placeholder="email@..." value={email} required onChange={eventInputEmail} />
      </div>
      <div className="password">
        <input type="password" name="password" id="note-title" placeholder="input password..." value={password} required onChange={eventInputPassword} />
      </div>
      <button type="submit" id="btnSubmit">
        Submit
      </button>
    </form>
  );
}

FormSignUp.propTypes = {
  AddUser: PropTypes.func.isRequired,
};

export default FormSignUp;
