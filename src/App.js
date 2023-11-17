import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { ButtonClear } from './components/ButtonClear';
import { evaluate } from 'mathjs';

import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos');
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          alt='Logo de freeCodeCamp'
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
        />
      </div>

      <div className='calculator-container'>
        <Screen input={input} />

        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>

        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>

        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>

        <div className='row'>
          <Button clickHandler={result}> = </Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>

        <div className='row'>
          <ButtonClear
            clickHandler={() => {
              setInput('');
            }}
          >
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
