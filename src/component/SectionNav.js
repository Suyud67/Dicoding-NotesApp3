import React from 'react';
import Searchbar from './Searchbar';
import ArchiveBtn from './BtnArsipPage';
import PropTypes from 'prop-types';
import BtnLogout from './BtnLogout';
import BtnTheme from './BtnTheme';
import BtnTranslate from './BtnTranslate';

function NavbarSection({ keyword, keywordChange, name, logout }) {
  return (
    <div className="navbar-section">
      <Searchbar keyword={keyword} keywordChange={keywordChange} />
      <BtnTheme />
      <BtnTranslate />
      <ArchiveBtn />
      <BtnLogout name={name} logout={logout} />
    </div>
  );
}

NavbarSection.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavbarSection;
