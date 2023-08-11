import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { debounce } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";


export default function Movie(props) {
  const { searchedMovie, type } = props;
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const [movieArray, setMovieArray] = useState([]);
  const [searchedMovieName, setSearchedMovieName] = useState("");
  const debouncedGetSearchedMovie = debounce(getSearchedMovie, 500);

  let url = `https://www.omdbapi.com/?&apikey=c0601445`;
  const location = useLocation()

  async function getAllMovie() {
    setPage(1)
    props.progress(0);
    let allMovieUrl = url + `&s=movie&type=${type}&page=1`;
    console.log(allMovieUrl);
    props.progress(5);
    let data = await fetch(allMovieUrl);
    props.progress(70);
    let parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    props.progress(90);
    let arrayOfMovie = parsedData.Search;
    props.progress(100);
    setMovieArray(arrayOfMovie);
  }

  async function getSearchedMovie(searchValue) {
    setPage(1);
    setSearchedMovieName(searchValue);
    let allMovieUrl = url + `&s=${searchValue}&type=${type}&page=1`;
    console.log(allMovieUrl);
    let data = await fetch(allMovieUrl);
    let parsedData = await data.json();
    let arrayOfMovie = parsedData?.Search || [];
    setMovieArray(arrayOfMovie);
  }

  useEffect(() => {
    getAllMovie();
  }, []);

  useEffect(() => {
    if (searchedMovie === "") {
      setPage(1)
      getAllMovie();
    } else {
      setPage(1)
      debouncedGetSearchedMovie(searchedMovie);
    }
  }, [searchedMovie, type]);

  async function fetchMoreData() {
    let allMovieUrl = `https://www.omdbapi.com/?&apikey=c0601445&page=${
      page + 1
    }&s=${searchedMovie == "" ? "movie" : searchedMovie}&type=${type}`;

    setPage(page + 1);
    let data = await fetch(allMovieUrl);
    let parsedData = await data.json();
    let arrayOfMovie = parsedData?.Search || [];
    setMovieArray(movieArray.concat(arrayOfMovie));
  }
  
  return (
    <>
      <InfiniteScroll
        dataLength={movieArray.length}
        next={fetchMoreData}
        hasMore={movieArray.length < totalResults}
      >
        <div className="container">
          <div className="py-4 d-flex  row gap-4">
            {movieArray.map((movie, index) => {
              const { Title, Year, Poster, imdbID } = movie;

              return (
                <div
                  className="col-sm d-flex justify-content-center"
                  key={index}
                >
                  <MovieItem
                    title={Title}
                    image={Poster}
                    Year={Year}
                    imdbID={imdbID}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
