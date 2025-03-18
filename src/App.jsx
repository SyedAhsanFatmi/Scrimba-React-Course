import Header from "./components/Header"
import Entry from "./components/Entry"
import entry from "../src/data/data"

export default function App() {

  const entryelements = entry.map((entrydata) => {
    return <Entry 
    key={entrydata.id}
    {...entrydata}
    />
  })
    return (
        <>
            <Header />
            <main className="container">
                {entryelements}
            </main>
        </>
    )
}