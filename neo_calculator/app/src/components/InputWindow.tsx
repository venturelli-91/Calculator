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
        placeholder="..."
        className="w-full p-2 mb-4 text-right text-xl bg-gray-800 text-white rounded"
      />
    </div>
  );
};

export default InputWindow;
