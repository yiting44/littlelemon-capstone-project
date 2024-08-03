import React from 'react';
import avatar from '../assets/avatar.png'; // Ensure you have an avatar image in the src/assets folder

const Landing = () => {
  return (
    <section id="about">
      <img src={avatar} alt="Avatar" className="avatar" />
      <h1>Name</h1>
      <p>bio data.</p>
    </section>
  );
};

export default Landing;
