import '../../styles/perso/MoodCheck.css';
import { useState } from 'react';

const MoodCheck = () => {
    const [response, setResponse] = useState(null);

    const handleYesClick = () => {
        setResponse('yes');
    };

    const handleNoClick = () => {
        setResponse('no');
    };

    return (
        <div className='moodCheckBloc'>
            <div className='moodCheckContainer'>
                <h1>Mood Check pour ce soir</h1>
                {!response ? (
                    <div className='moodCheckBouton'>
                        <button onClick={handleYesClick} className='yesButton'>Ouai Patrick t'es le goat</button>
                        <button onClick={handleNoClick} className='noButton'>Non Patrick tu pues</button>
                    </div>
                ) : (
                    <div className='moodCheckReponse'>
                        {response === 'yes' ? (
                            <p className='reponseText'>Envoie l'heure à laquelle t'arrives aux crêpes matchas</p>
                        ) : (
                            <p className='reponseText'>Eh</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoodCheck;

