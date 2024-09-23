import React, { useEffect, useState, useCallback } from 'react';

const ApiTranslator = ({ translations }) => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('es'); // Default language Spanish

    const handleTranslate = async () => {
        try {
            // Example API call (replace with actual API or logic)
            const response = await fetch(`https://api.example.com/translate?text=${inputText}&lang=${language}`);
            const data = await response.json();
            setTranslatedText(data.translatedText);
        } catch (error) {
            console.error('Error fetching translation:', error);
            setTranslatedText('Translation failed');
        }
    };


    return (
        <div>
            <h2>Language Translator</h2>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate"
            />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                {/* Add more languages */}
            </select>
            <button onClick={handleTranslate}>Translate</button>
            <h3>Translation:</h3>
            <p>{translatedText}</p>
        </div>
    );
};

export default ApiTranslator;
