import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesList = () => {

  // state variables for storing Movies data and for changing updating state.
  const [movies, setMovies] = useState([]);
  // default Image link if image is not present in provided API
  const defaultImage = 'https://via.placeholder.com/210x295?text=No+Image+From+API';

  //------------------------------------
  // API call for Fetching Movie data
  //---------------------------------------

  useEffect(() => {
    // Fetch movies from API
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);




  return (
    <div className="flex flex-wrap justify-center">

      {/* ------------------------------------------------------------------------- */}
      {/* ---- using map function to iterate through all the movie data fetched---- */}
      {/* ------------------------------------------------------------------------- */}

      {movies.map(movie => (
        <div key={movie.show.id} className="max-w-screen-sm lg:w-1/4 rounded overflow-hidden shadow-lg m-4">

          {/* movie image */}
          <img
            className="w-full h-64 object-cover"
            src={movie.show.image ? movie.show.image.original : defaultImage}
            alt={movie.show.name}
          />

          {/* Rating Div */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.show.name}</div>
            <p className="text-gray-700 text-base">
              {/* Rating: {movie.show.rating ? movie.show.rating.average : 'NA'} */}
              Rating: {movie.show.rating && movie.show.rating.average ? movie.show.rating.average : 'N/A'}
            </p>
          </div>

          {/* view summary Button */}
          <div className="px-6 py-4">
            <Link to={`/summary/${movie.show.id}`}>
              <button className="w-full bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                View Summary
              </button>
            </Link>
          </div>


        </div>
      ))}
    </div>
  );
}

export default MoviesList;
