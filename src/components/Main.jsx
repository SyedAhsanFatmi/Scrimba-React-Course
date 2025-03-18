import React from 'react'

const Main = () => {
  return (
    <main>
      <form className='search-form'>
        <input 
        type='text'
        placeholder='e.g. chicken'
        aria-label='Add ingredient'/>
        <button>Add ingredient</button>
      </form>
    </main>
  )
}

export default Main
