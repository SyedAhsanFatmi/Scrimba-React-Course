import React from 'react'
import avatar from '../assets/user.png'

const Header_2 = () => {
    const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}

export default Header_2
