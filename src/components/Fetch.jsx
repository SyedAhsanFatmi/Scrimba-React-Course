import { useState, useEffect } from 'react'

const Fetch = () => {

    const [starWarsData, setStarWarsData] = useState()
    const [count, setCount] = useState(0)

    console.log("infinite loop nigga stop the renderring")

    useEffect(function(){
       fetch("https://swapi.dev/api/people/1")
       .then(res => res.json())
       .then(data => setStarWarsData(data))
    }, [count])
  

  return (
    <div>
      <h1>the count is {count}</h1>
      <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Add</button>
      <pre>{JSON.stringify({starWarsData}, null, 2)}</pre>
    </div>
  )
}

export default Fetch
