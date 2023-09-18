import '../styles/Navigation.css'
import logo from '../assets/Photo_Sourire.jpg'

function Navigation() {
    const goToTop = (mesure) => {
        window.scrollTo({
            top: mesure,
            behavior: 'smooth',
        });
    };
    return (
        <header className='navigation'>
            <div className='navgauche'>
                <img src={logo} alt='PhotoPro' onClick={() => goToTop(0)}></img>
                <p className='prenom' onClick={() => goToTop(0)}>Patrick Wu</p>
            </div>
            <div className='navdroite'>
                <ul>
                    <li onClick={() => goToTop(0)}>Accueil</li>
                    <li onClick={() => goToTop(window.innerHeight)}>Projet</li>
                    <li onClick={() => goToTop(window.innerHeight * 2)}>TicTacToe</li>
                </ul>

            </div>
        </header>
    )
}

export default Navigation