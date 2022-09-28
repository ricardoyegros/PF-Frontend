import './App.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Detail from './components/Detail';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detalle/:i" element={<Detail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;