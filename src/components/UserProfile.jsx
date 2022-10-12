import React, { useState } from 'react';

const exampleBox = {
    height: "190px",
    width: "275px",
    color: "black",
    backgroundColor: "gray",
    margin: "15px",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "grid"
}
const falseInfo1 = (num, content) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(
            <div style={exampleBox} >{<h3>{content}</h3>}</div>
        );
    }
    return arr
}

export const UserProfile = () => {


    const [state, setState] = useState({});

    const handleClick = (e) => {
        if (state[e.target.value] === e.target.value) return setState({ ...state, [e.target.value]: null });
        return setState({ ...state, [e.target.value]: e.target.value });
    };

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <p>
                            <button class={state.onway === "onway" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample0" aria-expanded="false" aria-controls="collapseExample" value="onway" onClick={handleClick}>
                                En Camino
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample0">
                            <div class="card card-body">
                                {
                                    falseInfo1(3, "En Camino!")
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <p>
                            <button class={state.pending === "pending" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample" value="pending" onClick={handleClick}>
                                Pendientes
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample1">
                            <div class="card card-body">
                                {
                                    falseInfo1(3, "Pendientes!")
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <p>
                            <button class={state.finish === "finish" ? "btn btn-primary" : "btn btn-secundary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample" value="finish" onClick={handleClick}>
                                Finalizados
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample2">
                            <div class="card card-body">
                                {
                                    falseInfo1(3, "Finalizado!")
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
