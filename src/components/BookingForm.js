import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookingForm = () => {
  const [userName, setUserName] = useState('');
  const [movie, setMovie] = useState(null);
  // useParams hook for getting movie id -id here for dynamic routing for a specific movie booking. 
  const { id } = useParams();

  //-----------------------------------------------------------------------------
  // fetching movie data from API inside useEffect Hook with id as a dependency
  // ----------------------------------------------------------------------------

  useEffect(() => {
    // Fetch movie details from API
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  const handleBooking = () => {

    // Save user details to local storage
    const userDetails = {
      id: id,
      movieName: movie && movie.name,
      userName: userName,
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    //---------------------------------------------------------
    // Toast for succesfull booking and for failure as well
    //--------------------------------------------------------
    if (!userName) {
      // Display a failure toast if the input field is empty
      toast.error('Please enter your name.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Display a toast notification
    toast.success(`Movie booked for ${userName}`, {
      position: 'top-right',
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // Clear form
    setUserName('');
  };

  return (
    <div className="max-w-md  mx-auto bg-red-400 rounded overflow-hidden shadow-lg mt-16">
      <div className="px-6 py-4 flex flex-col">

        {/*--------------- Booking Form Heading------------------- */}
        <h2 className="text-gray-800 font-bold text-xl mb-2 mx-auto">Booking Form</h2>

        {/*-------------- Movie Id----------------- */}
        <p className="text-gray-700 text-base">Movie ID: {id}</p>

        {/* ----------Movie Name----------- */}
        <p className="text-gray-700 text-base">Movie Name: {movie && movie.name}</p>

        {/*------ Input feild section-------- */}
        <label className="block text-gray-700 text-sm font-bold my-6">
          Your Name:
          <input
            className="shadow appearance-none bg-red-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        {/* ------------Book Now Button ------------ */}
        <button
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleBooking}
        >
          Book Now
        </button>


      </div>
    </div>
  );
}

export default BookingForm;
