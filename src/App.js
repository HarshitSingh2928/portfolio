import logo from './logo.svg';
import './App.css';
import img from './Images/hs.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Row className='row-menu'> 
          
         <div className="Menu-Top">
          <a className="name-logo">
            <img src={img}></img>
          </a>
          <a className="name-logo">
            <span >Menu</span><FontAwesomeIcon icon={faBars} />
          </a>
       </div>
       
       <Col>
       <div className='headline'>
        <span>turning ideas into </span>
        <br></br>
         <span> real life <span>products</span> </span>
       <br></br>
        <span>is my calling.</span>
       </div>
       <a className='projects'>View Projects</a>
       </Col>
        </Row>
        <Row>
        <Col >
        <div>
          <h1 className='title'> title</h1>
        </div>
        </Col>
        <Col>
        <div className='links'>
         <a>github</a>
         <a>twitter</a>
         <a>linkedin</a>
         <a>leetcode</a>
        </div>
        </Col>
      </Row>
      </header>
     
     
    </div>
  );
}

export default App;
