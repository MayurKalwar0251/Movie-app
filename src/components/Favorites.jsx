import React from 'react';

const Favorites = ({ favoriteMovies }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favoriteMovies.map((imdbID) => {
        return (
          <div key={imdbID}>
            {/* Display information about the favorited movie */}
            {/* For example, you can fetch the details of the movie from the IMDb API */}
            <p>{imdbID}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
