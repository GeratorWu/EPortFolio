// src/components/InvitePage.js
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Minions from '../../assets/cheering_minions.gif'
import '../../styles/perso/Invite.css'


const InvitePage = () => {
  const { name } = useParams();
  const [isTrue, setIsTrue] = useState(false);

  const handleYesClick = () => {
    setIsTrue(false);
  }

  const handleNoClick = () => {
    setIsTrue(false);
  }
    
  return (
    <div className='inviteBloc'>
      {isTrue ? (
        <div>
          <h1>{name}</h1>
          <p>Veux-tu venir en date avec moi ?</p>
          <button onClick={handleYesClick}>Oui</button>
          <button onClick={handleNoClick}>Non</button>
        </div>
      ) : (
        <div>
          <img src={Minions} alt="GIF" />
          <h1>À plus tard {name} 😉</h1>
        </div>
      )}
    </div>
  );
};

export default InvitePage;
