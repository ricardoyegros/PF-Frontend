import './App.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Detail from './components/Detail';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import FormForUpload from './components/FormForUpload'
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detalle/:i" element={<Detail />}/>
        <Route path= "/register" element={<FormForUpload/>}/>
        <Route path="/creacion" element={<CreateForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;