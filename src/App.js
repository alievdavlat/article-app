import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Main, Register } from './components';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<Main/>} />
          <Route path='/login'  element={<Login/>} />
          <Route path='/register'  element={<Register/>} />
          <Route path='/'  element={<Main/>} />

        </Routes>
    </div>
  );
}

export default App;
