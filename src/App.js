import './App.css';
import Contact from './components/Contact.jsx';
import Detail from './components/Detail';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CreateUsers from './components/CreateUsers';
import CreateForm from './components/CreateForm';
import Categorys from './components/Categorys';
import ActualizarData from './components/ActualizarData';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Logout from './components/Logout';
import ShoppingCart from './components/ShoppingCart';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Categorys />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/detalle/:i" element={<Detail />} />
                <Route path="/register" element={<CreateUsers />} />
                <Route path="/creacion" element={<CreateForm />} />
                <Route path="/updateprofile" element={<ActualizarData />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    );
}
