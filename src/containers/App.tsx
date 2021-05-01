import React from 'react';
import { useDispatch } from 'react-redux';
import { updateText, useAppState } from './store';

export const App: React.FC = () => {
  const { text } = useAppState();
  const dispatch = useDispatch();

  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() => dispatch(updateText(text === 'foo' ? 'baz' : 'foo'))}
      >
        click
      </button>
    </div>
  );
};
