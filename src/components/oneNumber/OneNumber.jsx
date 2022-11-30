import React, { useState } from "react";
import "./oneNumber.css"

export default function OneNumber(props) {

    const [number, setNumber] = useState("GO !")

    let newNumber = () => {
        if (props.lotos.length !== 89) {
            const num = Math.floor(Math.random() * 91)
            if (!props.lotos.includes(num) && num !== 0) {
                setNumber(num)
                props.setLotos(lotos => [...lotos, num])
            } else {
                newNumber()
            }
        } else {
            setNumber("Game Over")
        }
    }

    return (
        <div className="OneNumber">
            <div className="view-number">
                {typeof number === "number" ? number : <h1>{number}</h1>}
            </div>
            <button onClick={() => { newNumber() }}>New number</button>
            <button onClick={() => { window.location.href="/" }}>Restart</button>
        </div>
    )
}