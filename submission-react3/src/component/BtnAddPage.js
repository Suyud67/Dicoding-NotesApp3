import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

function BtnAddPage() {
  return (
    <>
      <Link to={'/notes/add'} className="btn-add">
        <FaPlusCircle />
      </Link>
    </>
  );
}

export default BtnAddPage;
