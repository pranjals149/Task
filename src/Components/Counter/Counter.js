import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectCount, setCountDetails } from '../../features/count/countSlice'

import './Counter.css'

function Counter() {

    const dispatch = useDispatch()
    const reduxCount = useSelector(selectCount)

    let [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)

        dispatch(
            setCountDetails({
                count: number
            })
        )
    }

    return (
        <div className="counter">

            {/* 1st Part */}
            <div className="counter__button">
                <button onClick={increment}>Press to Add</button>
            </div>

            {/* 2nd Part */}
            <div className="counter__count">
                <h1>{reduxCount}</h1>
            </div>

        </div>
    )
}

export default Counter
