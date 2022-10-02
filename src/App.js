import './App.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Detail from './components/Detail';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CreateUsers from './components/CreateUsers'
import CreateForm from './components/CreateForm';
import Categorys from './components/Categorys';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Categorys />} />
        <Route path="/search" element={<Home />} />
        <Route path='/creacion' element={<CreateForm />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detalle/:i" element={<Detail />} />
        <Route path="/users/register" element={<CreateUsers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;