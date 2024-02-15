import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion/index";
import Agenda from "./pages/Agenda/index";
import Formulaire from "./pages/Formulaire inscription/index";
import Inscription from "./pages/Inscription/index";
import Liste from "./pages/Liste adherents/index";
import Notification from "./pages/Notification/index";
import Utilisateur from "./pages/Parametres utilisateur/index";

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/formulaire" element={<Formulaire />} />        
        <Route path="/inscription" element={<Inscription />} />   
        <Route path="/liste" element={<Liste />} />  
        <Route path="/notification" element={<Notification />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;