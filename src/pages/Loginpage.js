import React from 'react';
import FormLogin from '../component/FormLogin';
import { Link } from 'react-router-dom';
import { login } from '../data/data';
import PropTypes from 'prop-types';

function Loginpage({ loginSuccess }) {
  const handleLogin = async (user) => {
    const { data, error } = await login(user);

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <div className="container-form">
      <div className="header">
        <h2>Login Page</h2>
      </div>
      <FormLogin userLogin={handleLogin} />
      <p className="link">
        belum punya akun?{' '}
        <Link to={'/register'} className="link-direct">
          buat akun sekarang
        </Link>
      </p>
    </div>
  );
}

Loginpage.propTypes = {
  loginSuccess: PropTypes.func,
};

export default Loginpage;
