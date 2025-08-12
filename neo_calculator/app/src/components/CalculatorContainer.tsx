import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { useCalculatorStore } from '../store/calculatorStore';

const CalculatorContainer: React.FC = () => {
  const { displayValue, setDisplayValue, setOperator, setOperand, calculateResult, clear } =
    useCalculatorStore();

  const handleNumberClick = (num: string) => {
    setDisplayValue(displayValue === '0' ? num : displayValue + num);
  };

  const handleOperatorClick = (op: string) => {
    setOperator(op);
    setOperand(displayValue);
    setDisplayValue('');
  };

  const handleActionClick = (action: string) => {
    if (action === 'C') clear();
    else if (action === '=') calculateResult();
    else if (action === '←') setDisplayValue(displayValue.slice(0, -1) || '0');
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 bg-neutral-950 rounded-xl shadow-lg">
      <Display value={displayValue} />
      <Keypad
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onActionClick={handleActionClick}
      />
    </div>
  );
};

export default CalculatorContainer;
