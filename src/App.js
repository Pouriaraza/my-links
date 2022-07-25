import './style/style.scss';
import instagram from './images/instagram.jpg';
function App() {
  return (
    <div className="App">
      <section className='social-links'>
        <h1>u can follow me 🫠</h1>
        <div className='items instagram'>
       <a href=''>
       <img src={instagram} />
          <div className='info'><p>
            pouria_raza</p>
            <div className='followers'>  <span>338 followers</span> <span>585 following</span></div>

          </div>
       </a>
        </div>
      </section>
    </div>
  );
}

export default App;
