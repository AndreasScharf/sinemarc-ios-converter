//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'


import Nav from 'react-bootstrap/Nav';

function App() {
  return (
      <Router basename="/sinemarc-ios-converter" >
        <div className='App'>
          <div className='row justify-content-center'>
            <div className="col-12 col-md-8 col-lg-6">
            <Nav className='horizontal-wrapper' >
              <Nav.Item>
                <Nav.Link as={Link} to="/" style={{flex: '1 0 0'}}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>

              <Nav.Link as={Link} to="/about"  style={{flex: '1 0 0'}}>About</Nav.Link>
              </Nav.Item>
            </Nav>
            <hr className="w-100 my-2 border-secondary" />
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>

  );
}

export default App;
