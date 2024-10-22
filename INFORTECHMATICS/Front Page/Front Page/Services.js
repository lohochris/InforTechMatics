import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="service-card bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <p>We build responsive and dynamic websites tailored to meet business needs.</p>
        </div>
        <div className="service-card bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Cybersecurity Solutions</h3>
          <p>Our cybersecurity services protect your systems and data from potential threats.</p>
        </div>
        <div className="service-card bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
          <p>We analyze complex datasets to provide actionable insights that drive growth.</p>
        </div>
        <div className="service-card bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Mathematical Modeling</h3>
          <p>We apply mathematical techniques to solve real-world problems across industries.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
