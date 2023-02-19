import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import { ContextConsumer } from '../utils/Context';

function BtnTranslate() {
  return (
    <ContextConsumer>
      {(toggleContext) => {
        const { toggleTranslate } = toggleContext[1];
        return (
          <button onClick={toggleTranslate} className="btn-toggle">
            <BsTranslate />
          </button>
        );
      }}
    </ContextConsumer>
  );
}

export default BtnTranslate;
