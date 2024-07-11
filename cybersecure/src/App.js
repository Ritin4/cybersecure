import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Home />}></Route>

          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
