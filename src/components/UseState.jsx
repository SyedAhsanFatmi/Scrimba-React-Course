import React from 'react'
import Count from './Count'

export default function UseState() {

    let [ count, setCount ] = React.useState(0)

    function handlePlusClick() {
        setCount(prevCount => prevCount + 1)
    }
    function handleMinusClick() {
        if (count > 0)
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
        <div className="counter">
            <button className="minus" onClick={handleMinusClick} aria-label="Decrease count">-</button>
            <Count number={count} />
            <button className="plus" onClick={handlePlusClick} aria-label="Increase count">+</button>
        </div>
    </main>
  )
}

