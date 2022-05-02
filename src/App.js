import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp'
import Login from './components/Login'


import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  var Data=[
    {
        email:'sena@gmail.com',
        password:'Sena@123'
    },
    {
        email:'mohith@gmail.com',
        password:'mohith@123'
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignUp Data={Data}></SignUp>} />
          <Route path='/Login' element={<Login Data={Data}></Login>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
