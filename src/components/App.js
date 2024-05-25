import '../App.css'
import DateComponent from './perso/DateComponent';
import InvitePage from './perso/InvitePage';
import InvitePageReponse from './perso/InvitePageReponse';
import PageAccueil from './pageAccueil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (<div>
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/date" element={<DateComponent />} />
        <Route path="/date/:name" element={<InvitePage />} />
        <Route path="/date/proposition/:name" element={<InvitePageReponse />} />
      </Routes>
    </Router></div>)
}

export default App