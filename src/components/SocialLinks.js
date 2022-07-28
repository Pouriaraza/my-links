import instagram from '../images/instagram.jpg';
import telegram from '../images/telegram-channel.JPG';
import spotify from '../images/Spotify-profile.jpg';
import Linkedin from '../images/Linkedin-profile.jpg';
import nashenas from '../images/nashenas.jpg';
import React from "react";
import User from './UserName-data';
// import logoInstagram from '../images/Instagram_Glyph_Gradient.jpg';

const socialLinks = () => {
  return (
    <section className='social-links'>
      <h1>u can follow me 🫠</h1>
      <div className='items instagram'>
        <a href='https://instagram.com/pouria_raza?igshid=YmMyMTA2M2Y='>
          <img src={instagram} />
          <div className='info'>
            <User user="pouria_raza" />
            <div className='followers'>
              <span>338 followers</span>
              <span>585 following</span>
            </div>

          </div>
        </a>
      </div>

      <div className='items telegram'>
        <a href='https://t.me/old_dreamss'>
          <img src={telegram} />
          <div className='info'>
            <User user="Old dream" />
            <div className='followers'>
              <span>60 subscribers</span>
            </div>

          </div>
        </a>
      </div>

      <div className='items spotify'>
        <a href='https://open.spotify.com/user/dawcl418ypul8w2nlsv0ufam0?si=95b5c3777ff548d7'>
          <img src={spotify} />
          <div className='info'>
            <User user="Pouriarz" />
            <div className='followers'>
              <span>9 followers</span>
              <span>32 following</span>
            </div>

          </div>
        </a>
      </div>

      <div className='items Linkedin'>
        <a href='https://www.linkedin.com/in/pouria-razavian-3529211a1'>
          <img src={Linkedin} />
          <div className='info'>
            <User user="Pouria Razavian" />
            <div className='followers'>
            </div>

          </div>
        </a>
      </div>

      <div className='items nashenas'>
        <a href='https://www.linkedin.com/in/pouria-razavian-3529211a1'>
          <img src={nashenas} />
          <div className='info'>
            <User user="nashenas" />
            <div className='followers'>
            </div>

          </div>
        </a>
      </div>

    </section>
  );
};

export default socialLinks;