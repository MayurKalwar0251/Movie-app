
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Favorites from './components/Favorites';




function App() {

  const [searched,setSearched] = useState("")
  const [type,setType] = useState("")
  const [progress, setProgress] = useState(0);
  const [fav,setFav]= useState([])

  function handleSearched(value) {
    setSearched(value)
  }

  function setProgressValue(value) {
    setProgress(value)
  }
  function handleFav(fav) {
    setFav((prevFavorites) => [...prevFavorites, fav]);
  }
  return (
    <div className='app'>
         <LoadingBar height={1.5} color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Router>
         <Navbar searched={handleSearched}/>

          <Routes>
            <Route exact path='/' element={<Movie  addFavourite={handleFav} progress={setProgressValue} type={""} searchedMovie ={searched}/>}/>
            <Route exact path='/movie' element={<Movie addFavourite={handleFav} progress={setProgressValue}  type={'movie'} searchedMovie ={searched}/>}/>
            <Route exact path='/series' element={<Movie  addFavourite={handleFav} progress={setProgressValue} type={'series'} searchedMovie ={searched}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
