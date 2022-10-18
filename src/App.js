import Contact from "./components/Contact.jsx";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import CreateUsers from "./components/CreateUsers";
import CreateForm from "./components/CreateForm";
import Categorys from "./components/Categorys";
import ActualizarData from "./components/ActualizarData";
import Welcome from "./components/Welcome";
import ShoppingCart from "./components/ShoppingCart";
import Dashboard from "./components/dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Customers from './components/dashboard/Customers';
import Login from "./components/Login"
import Logout from "./components/Logout"
import { useSelector } from "react-redux";
import FinalShop from './components/FinalShop';
import { Navbar2 } from './components/Navbar2';
import { Home2 } from './components/Home2';
import { UserProfile } from './components/UserProfile.jsx';
import { UserConfig } from './components/UserConfig.jsx';
import  Geo  from "./components/Geo"
import { Sucursales } from "./components/dashboard/Sucursales"
import { Review } from './components/dashboard/Reviews.jsx';
import CustomerDetail  from "./components/dashboard/CustomerDetail"
import Wishlist from "./components/Wishlist.jsx";
import SpanningTable from "./components/dashboard/SpanningTable.jsx";
import DataTable from "./components/dashboard/DataTable";
import CreateAdmin from './components/dashboard/CreateAdmin';
import Ordenes from './components/dashboard/Ordenes';
import  UpdateItem  from './components/dashboard/UpdateItem'
import OrdenCostumer from './components/dashboard/OrdenCustomer';


export default function App() {
    const idUser = useSelector((state) => state.usersReducers.user.id);
    const token = useSelector((state) => state.usersReducers.token);
    const email = useSelector((state) => state.usersReducers.user.email);
    const isAdmin = useSelector((state) => state.usersReducers.user.isAdmin);
    const name = useSelector((state) => state.usersReducers.user.name);
    const address = useSelector((state) => state.usersReducers.user.address);
    // const identification = useSelector(
    //     (state) => state.usersReducers.identification
    // );

    if (token) {
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("isAdmin", isAdmin);
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("id", idUser + "");
        window.localStorage.setItem("adress", address);
        //window.localStorage.setitem('identification', identification);
    }

    if (!window.localStorage.token) {
        return (
            <div className="App">
                <Navbar2 />
                <Routes>
                    <Route path="/" element={<Categorys />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/detalle/:i" element={<Detail />} />
                    <Route path="/register" element={<CreateUsers />} />
                    <Route path="/creacion" element={<Login />} />
                    <Route path="/updateprofile" element={<Login />} />
                    <Route path="/welcome" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Login />} />
                    <Route path="/passwordReset" element={<Login />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/final-shopping" element={<FinalShop />} />
                    <Route path="/userprofile" element={<UserConfig />} />
                    <Route
                        path="/admin/customers/customer/:id"
                        element={<CustomerDetail />}
                    />
                    <Route path="/userprofile" element={<UserConfig />} />
                    <Route path='/geo' element={<Geo />} />
                    
                    <Route path="/admin/sucursal" element={<Sucursales/>}/>
                    <Route path="/admin/sales" element={<SpanningTable/>}/>
                    <Route path="/admin/stock" element={<DataTable/>}/>
                    <Route path="/admin/newadmin" element={<CreateAdmin/>}/>
                    <Route path="/admin/ordenes" element={<Ordenes/>}/>
                    <Route path="/updateitem" element={<UpdateItem/>}/>

                </Routes>
                <Footer />
            </div>
        );
    } else {
        return (
            <div className="App">
                <Navbar2/>
                <Routes>
                    <Route path="/" element={<Categorys/>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/contacto" element={<Contact />}/>
                    <Route path="/detalle/:i" element={<Detail />}/>
                    <Route path="/register" element={<CreateUsers/>}/>
                    <Route path="/creacion" element={<CreateForm />} />
                    <Route path="/updateprofile" element={<ActualizarData/>} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/passwordReset" element={<ForgotPassword />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin/sucursales" element={<Sucursales/>}/>
                    <Route path="/admin/comentarios" element={<Review/>}/>
                    <Route path='/final-shopping' element={<FinalShop />} />
                    <Route path="/final-shopping" element={<FinalShop />} />
                    <Route path="/userprofile" element={<UserConfig />} />
                    <Route
                        path="/admin/customers/customer/:id"
                        element={<CustomerDetail />}
                    />
                    <Route path="/userprofile" element={<UserConfig />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/admin/sucursal" element={<Sucursales/>}/>
                    <Route path="/admin/sales" element={<SpanningTable/>}/>
                    <Route path="/admin/stock" element={<DataTable/>}/>
                    <Route path="/admin/userorden" element={<OrdenCostumer/>}/>
                    <Route path="/admin/newadmin" element={<CreateAdmin/>}/>
                    <Route path="/admin/ordenes" element={<Ordenes/>}/>
                    <Route path="/updateitem" element={<UpdateItem/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}
