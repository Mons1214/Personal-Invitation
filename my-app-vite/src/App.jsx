import { Routes, Route, Link } from 'react-router-dom';
import Principal from './pages/Principal';
import Registro from './pages/Registro';
import ListaDeInvitados from './pages/ListaDeInvitados';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/Registro' element={<Registro/>} />
        <Route path='/ListaDeInvitados' element={<ListaDeInvitados/>} />
      </Routes>
    </div>
  );
}

export default App