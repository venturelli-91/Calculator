import React from 'react';

interface InputWindowProps {
  value: string;
  onChange: (value: string) => void;
}

const InputWindow: React.FC<InputWindowProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite aqui..."
      />
    </div>
  );
};

export default InputWindow;
