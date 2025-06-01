import { useState }from 'react'

const Main = () => {
    const [meme, setMeme]= useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }


    
  return (
    <main>
        <div className="form">
            <label>
                Top Text
                <input 
                type='text' 
                placeholder='The had us in the first half'
                name='topText' 
                onChange={handleChange}
                />
            </label>
            <label>
                Bottom Text
                <input 
                type='text' 
                placeholder='not gonna lie' 
                name='bottomText'
                onChange={handleChange}
                />
            </label>
            <button>Generate</button>
        </div>
        <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
    </main>
  )
}

export default Main
