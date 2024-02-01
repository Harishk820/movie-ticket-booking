import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieSummary = () => {
  const [movie, setMovie] = useState(null);

  // useParams hook for getting movie id -id here for dynamic routing for a specific movie summary. 
  const { id } = useParams();

  //-----------------------------------------------------------------------------
  // fetching movie data from API inside useEffect Hook with id as a dependency
  // ----------------------------------------------------------------------------
  useEffect(() => {
    // Fetch movie details from API
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  return (
    <div className="max-w-screen-md mx-auto bg-white rounded overflow-hidden shadow-lg mt-8">

      {/*--------------- Movie Image----------- */}
      <img
        className="w-full h-64 object-cover"
        src={movie && movie.image && movie.image.original}
        alt={movie && movie.name}
      />

      {/* --------Movie Name and Movie Sommary-------- */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie && movie.name}</div>
        <p className="text-gray-700 text-base">
          {movie && movie.summary && movie.summary.replace(/<[^>]*>/g, '')}
        </p>
      </div>

      {/* -----------Book Ticket Button-------------------- */}
      <div className="px-6 py-4">
        {/* dynamic link */}
        <Link to={`/booking/${id}`}>
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Book Ticket
          </button>
        </Link>
      </div>


    </div>

  );
}

export default MovieSummary;
