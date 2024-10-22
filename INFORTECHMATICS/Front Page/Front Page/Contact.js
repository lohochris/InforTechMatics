import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Implement form submission with API or Node.js backend here
  };

  return (
    <section id="contact" className="contact-section py-20 bg-blue-500 text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="block w-full mb-4 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="block w-full mb-4 p-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="block w-full mb-4 p-2"
        />
        <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
