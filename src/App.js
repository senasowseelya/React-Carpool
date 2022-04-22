import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from './components/Home'
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <Login></Login>
      <Home></Home>
    </div>
  );
}

export default App;
