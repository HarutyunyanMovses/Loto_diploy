import React, { useState, useEffect } from "react";
import "./allNumbers.css"
import Chack from "./chackNumbers/Chack";

export default function AllNumbers(props) {

    const [lastFiveNumbers, setLastFive] = useState([])


    useEffect(() => {
        if (props.lotos.length > 5) {
            const arr = props.lotos
            let y = []
            for (let i = arr.length - 1; i >= arr.length - 6; i--) {
                y.push(arr[i])
            }
            setLastFive(y)
        } else if (props.lotos.length !== 0) {
            setLastFive(props.lotos.reverse())
        } else {
            setLastFive([])
        }
    }, [props.lotos])

    return (
        <div className="AllNumbers">
            <div className="lastFiveNumbersBox">
                <h4>Last five numbers !</h4>
                <div className="lastFiveNumbers">
                    {lastFiveNumbers.map(item => {
                        return <span key={item}>{item}</span>
                    })}
                </div>
            </div>
              <Chack lotos={props.lotos}/>
        </div>
    )
}