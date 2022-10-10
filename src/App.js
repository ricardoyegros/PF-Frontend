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
import ShoppingCart from './components/ShoppingCart';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import Ensayo from './components/Ensayo';
import Customers from './components/Customers';
import Login from "./components/Login"
import Logout from "./components/Logout"
import { useSelector } from "react-redux";


export default function App() {

    const idUser = useSelector(state => state.usersReducers.user.id);
    const token = useSelector((state) => state.usersReducers.token);
    const email = useSelector(state => state.usersReducers.user.email);
    const isAdmin = useSelector(state => state.usersReducers.user.isAdmin);
    const name = useSelector(state => state.usersReducers.user.name);

    if (token) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('isAdmin', isAdmin);
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('id', idUser + '');
    };

    if (!window.localStorage.token) {
        return (
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Categorys />} />
                    <Route path="/updateprofile" element={<ActualizarData />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/passwordReset" element={<ForgotPassword />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/ensayo" element={<Ensayo />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}
