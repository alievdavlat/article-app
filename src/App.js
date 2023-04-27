import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Main, Navbar, Register } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Main/>} />
          <Route path='/login'  element={<Login/>} />
          <Route path='/register'  element={<Register/>} />
          <Route path='/main'  element={<Main/>} />

        </Routes>
    </div>
  );
}

export default App;
