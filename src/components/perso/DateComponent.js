import '../../styles/perso/Date.css';
import React, { useState } from 'react';

function DateComponent() {
    const [inputValue, setInputValue] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const link = `${window.location.origin}/date/${inputValue}`;
        setGeneratedLink(link);
        navigator.clipboard.writeText(link);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedLink);
    };

    const handleLinkClick = () => {
        navigator.clipboard.writeText(generatedLink);
    };

    return (
        <div className='dateBloc'>
            <h1>Qui voulez-vous inviter ?</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Entrez un prénom" />
                <button type="submit">💌 Générer l'invitation</button>
            </form>
            {generatedLink && (
                <div className='linkContainer'>
                    <input type="text" value={generatedLink} readOnly onClick={handleLinkClick} />
                    <button onClick={handleCopy}>📋 Copier</button>
                </div>
            )}
        </div>
    );
}

export default DateComponent;
