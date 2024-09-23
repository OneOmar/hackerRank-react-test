import React, { useEffect, useState, useCallback } from 'react';

const Translator = ({ translations }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  // Perform translation
  const handleTranslate = useCallback(() => {
    const translation = translations.get(inputText.toLowerCase()) || '';
    setOutputText(translation);
  }, [inputText, translations]);

  // Run translation effect when inputText changes
  useEffect(() => {
    handleTranslate();
  }, [inputText]);

  return (
    <div>
      <div className="controls">
        <div className="input-container">
          <label htmlFor="text-input">Input:</label>
          <input
            type="text"
            id="text-input"
            className="text-input"
            data-testid="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
          />
        </div>
        <div className="input-container">
          <label htmlFor="text-output">Output:</label>
          <input
            type="text"
            id="text-output"
            className="text-output"
            data-testid="text-output"
            value={outputText}
            readOnly
          />
        </div>
      </div>
      {/* <button onClick={handleTranslate}>Translate</button> */}
    </div>
  );
};

export default Translator;
