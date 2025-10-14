import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CardList from './components/CardList.jsx'
import list from "./movies.js"

function App() {
  return (
    <>
      <Header/>
        <main>
          <CardList movies = {list}/>
        </main>
      <Footer/>
    </>
  )
}

export default App