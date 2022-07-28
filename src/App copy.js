import './style/style.scss';
import React from 'react';
import SocialLinks from './components/SocialLinks';
import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
function App() {
  return (
    <div className="App">
          <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;


