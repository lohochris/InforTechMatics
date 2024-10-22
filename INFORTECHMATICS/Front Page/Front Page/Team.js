import React from 'react';

function Team() {
  return (
    <section id="team" className="team-section py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="team-member bg-white p-6 rounded shadow">
          <img src="./mypics.jpg" alt="Team Member 1" className="w-full h-40 object-cover rounded mb-4"/>
          <h3 className="text-xl font-bold">Loho Christopher</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member bg-white p-6 rounded shadow">
          <img src="team2.jpg" alt="Team Member 2" className="w-full h-40 object-cover rounded mb-4"/>
          <h3 className="text-xl font-bold">Jane Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member bg-white p-6 rounded shadow">
          <img src="team3.jpg" alt="Team Member 3" className="w-full h-40 object-cover rounded mb-4"/>
          <h3 className="text-xl font-bold">John Smith</h3>
          <p>Data Analyst</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
