import Accueil from './Accueil'
import Navigation from './Navigation'
import TicTacToe from './TicTacToe'
import Competence from './Competence'

function pageAccueil() {
    return (<div><Navigation /><Accueil /><Competence /><TicTacToe /></div>)
}

export default pageAccueil