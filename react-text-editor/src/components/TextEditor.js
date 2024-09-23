import React, { useState, useCallback } from 'react';

const TextEditor = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  // Handle input change
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // Append input to output array and reset input
  const appendInput = useCallback(() => {
    setOutput(prevOutput => [...prevOutput, input]);
    setInput('');  // Reset the input field
  }, [input]);

  // Remove last appended input (undo functionality)
  const resetInput = useCallback(() => {
    setOutput(prevOutput => prevOutput.slice(0, -1));
  }, []);

  return (
    <div>
      <div className="controls">
        <input
          className="word-input"
          type="text"
          data-testid="word-input"
          onChange={handleChange}
          value={input}
          placeholder="Type here..."
        />
        <button
          data-testid="append-button"
          onClick={appendInput}
          disabled={!input}
        >
          Append
        </button>
        <button
          data-testid="undo-button"
          onClick={resetInput}
          disabled={output.length === 0}
        >
          Undo
        </button>
      </div>
      <div className="text-field" data-testid="text-field">
        {output.map((value, index) => (
          <span key={index}>{value} </span>
        ))}
      </div>
    </div>
  );
};

export default TextEditor;
