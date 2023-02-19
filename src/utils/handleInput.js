import { useState } from 'react';

function useHandleInput(value = '') {
  const [input, setInput] = useState(value);

  const eventInput = (event) => {
    setInput(event.target.value);
  };

  return [input, eventInput];
}

export default useHandleInput;
