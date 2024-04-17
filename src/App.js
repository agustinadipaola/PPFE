
import './App.css';
import Home from './components/Home';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <header>
      <Router>
      <a href="https://github.com/agustinadipaola">
      <Button
          variant="light"
          style={{
            position: 'absolute',
            bottom: '-3%', // Adjust as needed
            right: '43%', // Adjust as needed
            backgroundColor:  '#ffffff00',
            color: '#ffffff00',
            borderColor: '#ffffff00',
            
          }}
        >
          GITHUB
        </Button>
        <Button
          variant="light"
          style={{
            position: 'absolute',
            bottom: '18%', // Adjust as needed
            right: '35%', // Adjust as needed
            padding: '100px',
            backgroundColor:  '#ffffff00',
            color: '#ffffff00',
            borderColor: '#ffffff00',
            
          }}
        >
          PROJECTS
        </Button>
</a>
        <Routes>
          
          <Route element={<Home />} path="/" />
         
        </Routes>
      </Router>
    </header>
  );
}

export default App;