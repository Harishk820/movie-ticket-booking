import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4">

      {/* ------------------------------------------- */}
      {/*-- ------Link to main movie page -------*/}

      <div className="container mx-auto">
        <Link to="/" className="text-white font-bold text-xl">MovieApp</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
