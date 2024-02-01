import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSummary from './components/MovieSummary';
import BookingForm from './components/BookingForm';
import MoviesListMain from './components/MovieListMain';
import NavigationBar from './components/NavigationBar';

function App() {
  return (

    //--------------------------------------------------------------------------------
    // crested routes for redirecting user to a specific path without reloading page
    //--------------------------------------------------------------------------------

    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<MoviesListMain />} />
          <Route path="/summary/:id" element={<MovieSummary />} />
          <Route path="/booking/:id" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
