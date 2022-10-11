import React from "react"


export default function Loading(){
    return(
        <div className="spinner-grow" style={{"width": "3rem", "height": "3rem"}} role="status">
        <span className="sr-only"></span>
        </div>
    )
}