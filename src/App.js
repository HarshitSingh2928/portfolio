import logo from './logo.svg';
import './App.css';
import img from './Images/hs.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < div className="Menu-Top">
          <a className="name-logo">
            <img src={img}></img>
          </a>
          <a className="name-logo">
            <span >Menu</span><FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        
      </header>
      <div className='headline'>
          <p>Turning ideas into real life products is my calling</p>
        </div>
      {/* <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      /> */}
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        innerScale={0.5}
        outerScale={5}
        outerAlpha={0.2}
        hasBlendMode={true}
        outerStyle={{
          border: '0px solid #fff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#fff'
        }}
      />
    </div>
  );
}

export default App;
