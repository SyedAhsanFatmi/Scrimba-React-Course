import React, { useState } from 'react'

const Joke = (props) => {
  const [bgColor, setBgColor] = useState('coral')
  const handleClick = () => {
    const newColor = bgColor === 'coral' ? 'purple' : 'coral'
    setBgColor(newColor)
    document.body.style.backgroundColor = newColor
  }
  return (
    <div className='joke'>
      <h1>{props.setup}</h1>
      <button onClick={handleClick}>{props.punchline}</button>
      <hr />
    </div>
  )
}

export default Joke
