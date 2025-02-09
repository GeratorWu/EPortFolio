import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/perso/Invite.css';
import { useState } from 'react';

const InvitePage = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [noClicked, setNoClicked] = useState(false);

    const handleYesClick = () => {
        navigate(`/date/proposition/${name}`);
    };

    const handleNoClick = () => {
        setNoClicked(true);
    };

    return (
        <div className='inviteBloc'>
            <div className='inviteContainer'>
                <h1>{name} ❤️</h1>
                <p>Veux-tu venir en date avec moi ? 🌹</p>
                <div className='inviteBouton'>
                    <button onClick={handleYesClick} className='yesButton'>Oui 💖</button>
                    <button onClick={handleNoClick} className={`noButton ${noClicked ? 'disabled' : ''}`}>
                        {noClicked ? '😢 Trop tard...' : 'Non 💔'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvitePage;
