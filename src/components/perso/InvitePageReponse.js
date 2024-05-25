import { useParams } from 'react-router-dom';
import Minions from '../../assets/cheering_minions.gif'
import '../../styles/perso/InviteReponse.css'


const InvitePage = () => {
    const { name } = useParams();

    return (
        <div className='inviteReponseBloc'>
            <div>
                <img src={Minions} alt="GIF" />
                <h1>À plus tard {name} 😉</h1>
            </div>
        </div>
    );
};

export default InvitePage;
