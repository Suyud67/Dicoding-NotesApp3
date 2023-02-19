import React from 'react';
import { Link } from 'react-router-dom';
import { FaArchive } from 'react-icons/fa';

function ArchiveBtn() {
  return (
    <>
      <Link to={'/notes/archived'} className="btn-arsip">
        <FaArchive />
      </Link>
    </>
  );
}

export default ArchiveBtn;
