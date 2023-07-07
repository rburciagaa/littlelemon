import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reserve from './pages/Reserve';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reserve' element={<Reserve/>}/>
    </Routes>
    </>
  );
}

export default App;
