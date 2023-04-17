import logo from './logo.svg';
import './App.css';
import img from './Images/hs.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       < div className="Menu-Top">
          <a className="name-logo">
            <img src={img}></img>
          </a>
          <a className="name-logo">
            <span>Menu</span><FontAwesomeIcon icon={faBars} />
          </a>
       </div>
      </header>
    </div>
  );
}

export default App;
