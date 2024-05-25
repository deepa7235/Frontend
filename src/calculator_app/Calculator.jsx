import React, { useState } from 'react';
import './css/Calculator.css';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperation = (operation) => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    switch (operation) {
      case '+':
        setTotal(total + value);
        break;
      case '-':
        setTotal(total - value);
        break;
      case '*':
        setTotal(total * value);
        break;
      case '/':
        setTotal(total / value);
        break;
      default:
        break;
    }
    setInputValue('');
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <div className="total">Total: {total}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>Addition</button>
        <button onClick={() => handleOperation('-')}>Subtraction</button>
        <button onClick={() => handleOperation('*')}>Multiplication</button>
        <button onClick={() => handleOperation('/')}>Division</button>
      </div>
    </div>
  );
}

export default Calculator;
