import React from 'react'

const Joke_2 = (props) => {
  return (
    <>
    <div className='joke'>
      <h1>{props.setup}</h1>
      <p>{props.punchline}</p>
      <h2>{props.oneliner}</h2>
      <hr />
    </div>
    </>
  )
}

export default Joke_2
