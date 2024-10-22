import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section flex items-center justify-center bg-blue-500 h-screen">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to InforTechMatics</h1>
        <p className="mt-4">We provide cutting-edge solutions in Information, Technology, and Mathematics.</p>
        <a href="#about" className="btn bg-white text-blue-500 px-4 py-2 mt-6 rounded">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
