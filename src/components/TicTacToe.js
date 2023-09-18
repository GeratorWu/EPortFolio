import { useState } from 'react'
import '../styles/TicTacToe.css'

function TicTacToe() {
    const [plateau, setPlateau] = useState(Array(9).fill(""));
    const [tour, setTour] = useState(true);
    const [finPartie, setFinPartie] = useState(false);
    const [joueur, setJoueur] = useState("Au tour de X")

    const changerValeur = (i) => {
        if (!finPartie) {
            const nouveauPlateau = [...plateau];
            if (tour === true && plateau[i] === "") {  
                nouveauPlateau[i] = 'X';
                setJoueur("Au tour de O");
            }
            else if (tour === false && plateau[i] === "") {
                nouveauPlateau[i] = 'O';
                setJoueur("Au tour de X");
            }
            else {
                alert('Vous ne pouvez pas jouer ici !')
            }
            setPlateau(nouveauPlateau);
            setTour(!tour);
            checkVictoire(nouveauPlateau);
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
            }
            else if (plateau[a] === 'O' && plateau[b] === 'O' && plateau[c] === 'O') {
                setJoueur("Joueur O a gagné.");
                setFinPartie(true);
            }
        }
    }

    const recommencer = () => {
        const tmpPlateau = [...plateau];
        for(let i = 0; i<plateau.length ; i++){
            tmpPlateau[i] = "";
        }
        setPlateau(tmpPlateau);
        setFinPartie(false);
        setTour(true);
        setJoueur("Au tour de X");
    }


    return (
        <div className='centre'>
            <h1>Tic-Tac-Toe</h1>
            <div className='bas'>
                <div className='grillage'>
                    {plateau.map((valeur, index) => (
                        <div key={index} onClick={() => changerValeur(index)} className='case'>
                            {valeur}
                        </div>
                    ))}
                </div>
                <div className='droite'>
                    <p>{joueur}</p>
                    <button onClick={() => recommencer()}>Recommencer</button>
                </div>
            </div>
        </div>
    )
}



export default TicTacToe