import Header from './components/Header.jsx'
import MovieCard from './components/MovieCard.jsx'
import Footer from './components/Footer.jsx'
import list from "./movies.js"
list.sort((a, b) => a.title.localeCompare(b.title));

const movieList = list.map((movie) => {
  return ()
})

function App() {
  return (
    <>
      <Header/ >
        <main>
          {movieList}
        </main>
      <Footer/ >
    </>
  )
}

export default App