import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from '../src/Componenets/NavbarHeader/HeaderNav'
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNav/>
        <Navbar />
        <Home/>
      </Router>
    </div>
  );
}

export default App;
