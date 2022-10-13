import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersFinish, getOrdersOnPending, getOrdersOnWay } from '../redux/actions/userProfileActions';
import { OrderCard } from './OrderCard';


const falseInfo1 = (num, content) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(
            <OrderCard content={content} />
        );
    }
    return arr;
};

export const UserProfile = () => {

    const dispatch = useDispatch();

    const reduxState = useSelector(state => state.userProfileReducer);

    const arr = ['Procesando Pago', 'Preparando Envio', 'Enviado', 'Completado', 'Anulado'];

    useEffect(() => {
        dispatch(getOrdersOnWay(localStorage.id , 'Preparando Envio'));
        dispatch(getOrdersFinish(localStorage.id, 'Enviado'));
        dispatch(getOrdersOnPending(localStorage.id, 'Completado'));
    }, [dispatch]);

    const [state, setState] = useState({});

    const handleStyle = (e) => {
        if (state[e.target.value] === e.target.value) return setState({ ...state, [e.target.value]: null });
        return setState({ ...state, [e.target.value]: e.target.value });
    };

    const handleClick = (e) => {
        handleStyle(e);
    };

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <p>
                            <button className={state.onway === "onway" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample0" aria-expanded="false" aria-controls="collapseExample" value="onway" onClick={handleClick}>Esta en camino</button>
                        </p>
                        <div className="collapse" id="collapseExample0">
                            <div className="card card-body">
                                {
                                    falseInfo1(3, "En camino")
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p>
                                <button className={state.pending === "pending" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample" value="pending" onClick={handleClick}>
                                    Pendientes
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample1">
                                <div className="card card-body" >
                                    {
                                        falseInfo1(3, "Pendiente")
                                    }
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col">
                            <p>
                                <button className={state.finish === "finish" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" value="finish" onClick={handleClick}>
                                    Finalizados
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body">
                                    {
                                        falseInfo1(3, "Finalizado")
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
