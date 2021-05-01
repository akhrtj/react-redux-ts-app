import React from 'react';

import { useDispatch } from 'react-redux';

import { updateText, useAppState } from './store';

export const App: React.FC = () => {
  const { text } = useAppState();
  const dispatch = useDispatch();

  const btnClickHandler = () => dispatch(updateText(text === 'foo' ? 'baz' : 'foo'));

  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={btnClickHandler}>
        click
      </button>
    </div>
  );
};
