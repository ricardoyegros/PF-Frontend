import React from 'react'
import { Carrousel } from './Carrousel';
import { Filtros2 } from './Filtros2';

const myDiv = {
    height: "200px",
    width: "180px",
    backgroundColor: "gray",
    margin: "10px",
    padding: "10px",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
};

export const Home2 = () => {

    const infoFalse = (num) => {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(<div style={myDiv}>Soy Una CARD!</div>)
        }
        return arr
    };

    return (
        <>
            <Carrousel />
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                <Filtros2 />
            </div>
            <div className="d-flex p-2">
                <div className="d-flex flex-wrap">
                    {infoFalse(24).map(e => e)}
                </div>
            </div>
        </>
    );
};
