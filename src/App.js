import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp'
import Login from './components/Login'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
