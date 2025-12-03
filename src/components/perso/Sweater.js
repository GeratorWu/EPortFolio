import '../../styles/perso/Sweater.css';
import { useState } from 'react';
import sweaterImage from '../../assets/sweater.jpg';

const Sweater = () => {
    const [step, setStep] = useState(0); // 0: bouton ouvrir, 1: message moqueur, 2: bouton final, 3: image

    const handleOpenGift = () => {
        setStep(1);
    };

    const handleShowSweater = () => {
        setStep(3);
    };

    return (
        <div className='sweaterBloc'>
            <div className='sweaterContainer'>
                {step === 0 && (
                    <>
                        <h1>Cadeau 🎁</h1>
                        <button onClick={handleOpenGift} className='openButton'>
                            Ouvrir son cadeau
                        </button>
                    </>
                )}
                {step === 1 && (
                    <>
                        <h1>BHAHHAHAHA</h1>
                        <p className='mockText'>T'as pas eu de sweater alors que tes potes ont eu</p>
                        <button onClick={() => setStep(2)} className='nextButton'>
                            Vraiment ?
                        </button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h1>Non j'dahek</h1>
                        <p className='mockText'>Voici la version dématérialisé, tu peux pas encore le mettre mais tkt c'est dans la tête tout ça</p>
                        <p className='mockText'>En plus Maison Margiela 1690 euros de rien</p>
                        <img src={sweaterImage} alt="Sweater" className='sweaterImage' />
                    </>
                )}
            </div>
        </div>
    );
};

export default Sweater;

