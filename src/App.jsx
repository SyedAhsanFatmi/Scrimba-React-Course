import './App.css'
import Contact from './components/Contact'
import Joke from './components/Joke'
import Joke_2 from './components/Joke_2'

function App() {

  return (
    <>
    <div className='contacts flex w-full h-full'>
      <Contact 
      img='./src/assets/mr-whiskerson.png'
      name="Mr. Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
      />
      <Contact 
      img='./src/assets/felix.png'
      name="Felix"
      phone="(212) 555-4567"
      email="thecat@hotmail.com" 
      />
      <Contact 
      img='./src/assets/fluffykins.png'
      name="Fluffykins"
      phone="(212) 555-2345"
      email="fluff@me.com" 
      />
      <Contact 
      img='./src/assets/pumpkin.png'
      name="Pumpkin"
      phone="(0800) CAT KING"
      email="pumpkin@scrimba.com" 
      />
    </div>
    <div>
    <Joke 
    setup='What color do cats love the most?'
    punchline='Purrple'/>
    <Joke_2 
    setup='Which day of the week do cats love the most?'
    punchline='Caturday'/>
    <Joke_2 style={{backgroundColor: 'purple'}}
    oneliner='We love all cat puns, but these are especially cat-tastic.' />
    </div>
    </>
  )
}

export default App
