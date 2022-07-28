import instagram from '../images/instagram.jpg';
import React from "react";
import User from './UserName-data';
// import logoInstagram from '../images/Instagram_Glyph_Gradient.jpg';

const socialLinks = () => {
  return (
    <section className='social-links'>
      <h1>u can follow me 🫠</h1>
      <div className='items'>
        <a href='https://instagram.com/pouria_raza?igshid=YmMyMTA2M2Y='>
          <img src={instagram} />
          <div className='info'>
          <User user="pouria_raza"/>
            <div className='followers'>
              <span>338 followers</span>
              <span>585 following</span>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
};

export default socialLinks;