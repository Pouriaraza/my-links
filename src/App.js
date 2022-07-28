import './style/style.scss';
import React from 'react';
import SocialLinks from './components/SocialLinks';
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';
function App() {
  return (
    <div className="App">
          {/* <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div> */}
      <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
      <SocialLinks />
      <footer>
     <a href='https://www.linkedin.com/in/pouria-razavian-3529211a1' className='by'>by Pouria Razavian</a>
      </footer>
    </div>
  );
}

export default App;
