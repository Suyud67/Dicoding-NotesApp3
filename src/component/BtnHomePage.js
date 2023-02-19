import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

function BtnHomePage() {
  return (
    <>
      <Link to={'/'} className="btn-home">
        <FaRegArrowAltCircleLeft /> Homepage
      </Link>
    </>
  );
}

export default BtnHomePage;
