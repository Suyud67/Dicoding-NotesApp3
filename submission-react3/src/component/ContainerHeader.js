import React from 'react';
import NavbarSection from './SectionNav';
import PropTypes from 'prop-types';

function ContainerHeader({ keyword, keywordChange, name, logout }) {
  return (
    <header>
      <div className="logo">
        <h1>NotesApp</h1>
      </div>
      <NavbarSection keyword={keyword} keywordChange={keywordChange} name={name} logout={logout} />
    </header>
  );
}

ContainerHeader.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default ContainerHeader;
