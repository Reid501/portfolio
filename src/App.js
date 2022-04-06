import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import SingleProject from './components/SingleProject';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/projects/:slug" element={ <SingleProject /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
