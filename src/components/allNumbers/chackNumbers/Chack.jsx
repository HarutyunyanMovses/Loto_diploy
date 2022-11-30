import React, { useState } from "react";
// import { useEffect } from "react";
import win from "..//..//..//icons/win.gif"
import lose from "..//..//..//icons/lose.gif"
import "./chack.css"


export default function Chack(props) {

    const [numbers, setNumbers] = useState('')
    const [chackeds, setChackeds] = useState([])
    const [noChack, setNoChack] = useState([])
    const [bool, setBool] = useState(false)

    function hendlerChack() {
        const arrNumbers = numbers.split(" ")
        const chack = []
        const noChack = []

        for (const item of arrNumbers) {
            if (props.lotos.includes(+item)) {
                chack.push(item)
            } else {
                noChack.push(item)
            }
        }

        if (chack.length === 5) {
            setChackeds(chack)
            setBool(1)
        } else {
            setChackeds(chack)
            setNoChack(noChack)
            setBool(2)
        }
    }

    if (bool === 1) {
        return (
            <div className="Chack">
                <img src={win} alt="WIN !" />
                <div className="noChack">
                    {
                        chackeds ?
                            chackeds.map(item => {
                                return <span key={item}>{item}</span>
                            })
                            : ""
                    }
                </div>
            </div>
        )
    }
    if (bool === 2) {
        return (
            <>
                <div className="Chack">
                    <img src={lose} alt="LOSE !" />
                    <div className="noChack">
                        {
                            chackeds ?
                                chackeds.map(item => {
                                    return <span key={item}>{item}</span>
                                })
                                : ""
                        }
                        {
                            noChack ?
                                noChack.map(item => {
                                    return <span key={item} style={{ "border-color": "red" }}>{item}</span>
                                })
                                : ""
                        }
                    </div>
                </div>
                <button
                    id='continue'
                    onClick={() => {
                        setChackeds([])
                        setBool(false)
                        setNumbers('')
                    }}>
                    Continue
                </button>
            </>
        )
    }

    return (
        <div className="Chack">
            <div className="chackControl">
                <input type="text" placeholder="To check numbers ⌕" value={numbers}
                    onChange={(e) => {
                        setNumbers(e.target.value)
                    }} />
                <button onClick={hendlerChack}>Check</button>
            </div>
        </div>
    )
}