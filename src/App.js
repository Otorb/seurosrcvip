import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import TextHome from './Components/Home/TextHome';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <TextHome />
     <About/>
     <br /> <br /> <br />
     <Contact />
    </div>
  );
}

export default App;
