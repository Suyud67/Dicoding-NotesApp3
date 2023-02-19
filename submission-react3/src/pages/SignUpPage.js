import React from 'react';
import FormSignUp from '../component/FormSignUp';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../data/data';

function SignUpPage() {
  const navigate = useNavigate();

  const handleRegistUser = async (user) => {
    const { error } = await register(user);

    if (!error) {
      navigate('/');
      window.alert('success create account');
    }
  };

  return (
    <div className="container-form">
      <div className="header">
        <h2>Form Buat Akun</h2>
      </div>
      <FormSignUp AddUser={handleRegistUser} />
      <p className="link">
        sudah punya akun?{' '}
        <Link to={'/'} className="link-direct">
          coba login dehh
        </Link>
      </p>
    </div>
  );
}

export default SignUpPage;
