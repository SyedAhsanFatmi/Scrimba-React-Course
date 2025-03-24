import React from 'react'

export default function ArrayState ()  {
 
    const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

 const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
 "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
 const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

 function addFavoriteThing() {

    const newFavoriteThing = allFavoriteThings[Math.floor(Math.random() * allFavoriteThings.length)]
    setMyFavoriteThings(prev => [...prev, newFavoriteThing])
 }
 
 return (
   <main className='arrayState'>
     <button onClick={addFavoriteThing}>Add item</button>
     <section aria-live="polite">
       {thingsElements}
     </section>
   </main>
 )
}
