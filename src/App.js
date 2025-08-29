import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Index';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import './app.css';

function App() {
  const [logado, setLogado] = useState(false);
  const [colaboradores, setColaboradores] = useState([]);
  const [tela, setTela] = useState('register');


  const aoNovoColaboradorAdicionar = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  if (!logado) {
    if (tela === 'login') {
      return <Login aoLogar={setLogado} irParaCadastro={() => setTela('register')} />;
    } else {
      return <Register voltarParaLogin={() => setTela('login')} />;
    }
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionar} />
    </div>
  );
}

export default App;
