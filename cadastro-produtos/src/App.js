import React from 'react';
import Navbar from  './components/navbar';
import Rotas from './rotas';
import { HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>                            {/* rota pai, raiz (no browser aparece #) */}
      <div className = "container">   {/* criado o container para centralizar os componentes Navbar e Home */}
        <Navbar />
        <Rotas />       
      </div>
    </HashRouter>
   );
}

export default App;
