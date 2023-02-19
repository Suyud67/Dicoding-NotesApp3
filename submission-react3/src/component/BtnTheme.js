import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ContextConsumer } from '../utils/Context';

function BtnTheme() {
  return (
    <ContextConsumer>
      {(toggleContext) => {
        const { theme, toggleTheme } = toggleContext[0];
        return (
          <button onClick={toggleTheme} className="btn-toggle">
            {theme === 'ligth' ? <FiMoon /> : <FiSun />}
          </button>
        );
      }}
    </ContextConsumer>
  );
}

export default BtnTheme;
