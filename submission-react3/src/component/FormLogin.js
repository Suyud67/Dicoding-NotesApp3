import React from 'react';
import useHandleInput from '../utils/handleInput';
import PropTypes from 'prop-types';

function FormLogin({ userLogin }) {
  const [email, setInputEmail] = useHandleInput('');
  const [password, setInputPass] = useHandleInput('');

  const eventSubmit = (e) => {
    e.preventDefault();

    userLogin({ email, password });
  };

  return (
    <form action="/login" method="post" id="form" onSubmit={eventSubmit}>
      <div className="email">
        <input type="email" name="email" id="note-title" placeholder="email@..." value={email} required onChange={setInputEmail} />
      </div>
      <div className="password">
        <input type="password" name="password" id="note-title" placeholder="enter password..." value={password} required onChange={setInputPass} />
      </div>
      <button type="submit" id="btnSubmit">
        Submit
      </button>
    </form>
  );
}

FormLogin.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default FormLogin;
