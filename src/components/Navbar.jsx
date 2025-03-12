import React from 'react'

const Navbar = () => {
  return (
    <header >
      <nav className="navbar">
        <img src="..\src\assets\react.svg" width='40px' style={{marginRight: '7px' }} alt='React-logo'/>
        <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
            ReactFacts
        </span>
      </nav>
    </header>
  )
}

export default Navbar;