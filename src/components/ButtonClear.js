import React from 'react';
import '../styles/ButtonClear.css';

function ButtonClear(props) {
  return (
    <div className='btn-clear' onClick={props.clickHandler}>
      {props.children}
    </div>
  );
}

export { ButtonClear };
