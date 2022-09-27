import './App.css';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Detail from './components/Detail';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/detalle" element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;