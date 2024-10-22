import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold">InforTechMatics</h2>
      <ul className="flex space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
