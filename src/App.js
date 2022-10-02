import "./App.css";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CreateUsers from "./components/CreateUsers";
import CreateForm from "./components/CreateForm";
import ActualizarData from "./components/ActualizarData";
import Welcome from "./components/Welcome";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/detalle/:i" element={<Detail />} />
                <Route path="/register" element={<CreateUsers />} />
                <Route path="/creacion" element={<CreateForm />} />
                <Route path="/updateprofile" element={<ActualizarData />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
