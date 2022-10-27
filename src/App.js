import { useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';


function App() {

  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState(
    [
      {
        title : 'Terminator',
        description : 'terminator est un film ...',
        posterURL : 'terminator.jpeg',
        rating : 3,
        id : 1
      },
      {
        title : 'Bad boys',
        description : 'terminator est un film ...',
        posterURL : 'bad-boys.jpeg',
        rating : 3,
        id : 2
      },
      {
        title : 'Rambo',
        description : 'terminator est un film ...',
        posterURL : 'rambo.jpeg',
        rating : 3,
        id : 3
      },
      {
        title : 'La casa de papel',
        description : 'terminator est un film ...',
        posterURL : 'casa-de-papel.jpeg',
        rating : 3,
        id : 4
      },
    ]
  );

  return (
    <div className="App">
      <header>
        <Navbar setSearchMovie={ setSearchMovie } />
        <SideBar />
      </header>
      <main>
        <MovieList movies={ movies } searchMovie={ searchMovie } />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
