import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/perso/Invite.css'

const InvitePage = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const handleYesClick = () => {
        navigate(`/date/proposition/${name}`);
    }

    const handleNoClick = () => {
        alert("Désolé le bouton marche plus...");
    }

    return (
        <div className='inviteBloc'>
            <div>
                <h1>{name}</h1>
                <p>Veux-tu venir en date avec moi ?</p>
                <div className='inviteBouton'>
                <button onClick={handleYesClick}>Oui</button>
                <button onClick={handleNoClick}>Non</button>
                </div>
            </div>
        </div>
    );
};

export default InvitePage;
