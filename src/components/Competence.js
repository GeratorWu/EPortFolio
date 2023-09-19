import '../styles/Competence.css'
import { listeProjet } from "../datas/listeProjet"
import { useState } from 'react'

function Competence() {
    const [titre, setTitre] = useState("Cliquez sur les compétences")
    const [description, setDescription] = useState("")
    const [langage, setLangage] = useState(" - ")


    const afficheProjet = (i) => {
        const projetCible = listeProjet.find((projet) => projet.id === i);
        setTitre(projetCible.nom);
        setDescription(projetCible.description);
        setLangage(projetCible.langage);
    }

    return (
        <div className='competencebloc'>
            <div className='competencegauche'>
                <h1>Mes compétences</h1>
                <div className='competencelogiciel'>
                    <div>
                        <h2>Développement logiciel</h2>
                        <p onClick={() => afficheProjet(1)}>Java</p>
                        <p onClick={() => afficheProjet(2)}>VBnet</p>
                        <p onClick={() => afficheProjet(3)}>C</p>
                        <p onClick={() => afficheProjet(4)}>C++</p>
                        <p onClick={() => afficheProjet(99)}>Python</p>
                    </div>
                    <div><h2>Développement Web</h2>
                        <p onClick={() => afficheProjet(6)}>React</p>
                        <p onClick={() => afficheProjet(5)}>Angular</p>
                        <p onClick={() => afficheProjet(7)}>HTML</p>
                        <p onClick={() => afficheProjet(7)}>CSS</p>
                        <p onClick={() => afficheProjet(8)}>PHP</p>
                        <p onClick={() => afficheProjet(8)}>SQL</p>
                        <p onClick={() => afficheProjet(7)}>JavaScript</p>
                    </div>
                </div>
            </div>
            <div className='competencedroite'>
                <h1>Mes projets</h1>
                <div className='competenceprojet'>
                    <h2 className='competencelangage'>{langage}</h2>
                    <h2 className='competencetitre'>{titre}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Competence