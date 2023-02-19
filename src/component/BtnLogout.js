import React from 'react';
import PropTypes from 'prop-types';
import { FaSignOutAlt } from 'react-icons/fa';

function BtnLogout({ name, logout }) {
  return (
    <button onClick={logout} className="btn-logout">
      <FaSignOutAlt /> {name}
    </button>
  );
}

BtnLogout.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default BtnLogout;
