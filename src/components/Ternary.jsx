import React from 'react'

const Ternary = () => {

    let [ goingOut, setGoingOut ] = React.useState(false)

    function handleGoingOutClick() {
        setGoingOut(goingOut ? false : true)
    }

  return (
      <main >
          <h1 className="title">Do I feel like going out tonight?</h1>
          <button className="value" onClick={handleGoingOutClick}>{goingOut ? 'Yes' : 'No' }</button>
      </main>
  )
}

export default Ternary
