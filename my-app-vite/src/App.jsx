import { Routes, Route, Link } from 'react-router-dom';
import Principal from './pages/Principal';
import Registro from './pages/Registro';
import ListaDeInvitados from './pages/ListaDeInvitados';
import React, { useState } from 'react';


function App() {

  const [registros, setRegistros] = useState([]);

  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Principal registros={registros} setRegistros={setRegistros}/>} 
        />
        <Route path='/Registro' element={<Registro registros={registros} setRegistros={setRegistros}/>} 
        />
        <Route path='/ListaDeInvitados' element={<ListaDeInvitados registros={registros}/>} 
        />
      </Routes>
    </div>
  );
}

export default App;