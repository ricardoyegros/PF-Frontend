import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";


const OrdenCustomer = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
    const { id, name, lastname } = state
    //console.log(state)
    const handleBack = () => {
        //console.log("click")
        navigate('../admin/customers')
    }
    
  return (
    <>  
        <Sidebar />
        
        <div className="container">
            <div className="row">
                <div>
                    <button type="button" className="btn btn-primary" onClick={handleBack}>Volver</button>
                </div>
            <h1>Órdenes de compra de {name} {lastname} - {id}</h1>
            </div> 
        </div>
    </>
  )
}

export default OrdenCustomer