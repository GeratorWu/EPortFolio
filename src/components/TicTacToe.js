import { useState } from 'react'
import '../styles/TicTacToe.css'

function TicTacToe() {
    const [plateau, setPlateau] = useState(Array(9).fill(""));
    const [tour, setTour] = useState(true);
    const [finPartie, setFinPartie] = useState(false);
    const [joueur, setJoueur] = useState("Au tour de X");
    const [egalite, setEgalite] = useState(0);

    const changerValeur = (i) => {
        if (!finPartie) {
            const nouveauPlateau = [...plateau];
            if (tour === true && plateau[i] === "") {
                nouveauPlateau[i] = 'X';
                setJoueur("Au tour de O");
                setTour(!tour);
                checkVictoire(nouveauPlateau);
            }
            else if (tour === false && plateau[i] === "") {
                nouveauPlateau[i] = 'O';
                setJoueur("Au tour de X");
                setTour(!tour);
                checkVictoire(nouveauPlateau);
            }
            else {
                alert('Vous ne pouvez pas jouer ici !');
            }
            setPlateau(nouveauPlateau);
        }

    };

    const checkVictoire = (plateau) => {
        const victoire = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < victoire.length; i++) {
            const [a, b, c] = victoire[i]
            if (plateau[a] === 'X' && plateau[b] === 'X' && plateau[c] === 'X') {
                setJoueur("Joueur X a gagné.");
                setFinPartie(true);
                return;
            }
            else if (plateau[a] === 'O' && plateau[b] === 'O' && plateau[c] === 'O') {
                setJoueur("Joueur O a gagné.");
                setFinPartie(true);
                return;
            }
        }
        setEgalite(egalite + 1);
        if (egalite === 8) {
            setFinPartie(true);
            setJoueur("Égalité, veuillez recommencer");
            setEgalite(0);
        }
    }

    const recommencer = () => {
        const tmpPlateau = [...plateau];
        for (let i = 0; i < plateau.length; i++) {
            tmpPlateau[i] = "";
        }
        setPlateau(tmpPlateau);
        setFinPartie(false);
        setTour(true);
        setJoueur("Au tour de X");
        setEgalite(0);
    }


    return (
        <div className='centre'>
            <h1>Tic-Tac-Toe</h1>
            <div className='TTTtexte'>
                <p>{joueur}</p>
                <button className='TTTbutton' onClick={() => recommencer()}>Recommencer</button>
            </div>
            <div className='grillage'>
                {plateau.map((valeur, index) => (
                    <div key={index} onClick={() => changerValeur(index)} className='case'>
                        {valeur}
                    </div>
                ))}
            </div>

        </div>
    )
}



export default TicTacToe