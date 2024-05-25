import '../../styles/perso/Date.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function DateComponent() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/date/${inputValue}`);
    };

    return (
        <div className='dateBloc'>
          <h1>Qui voulez-vous inviter ?</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Valider</button>
          </form>
        </div>
    );
}

export default DateComponent