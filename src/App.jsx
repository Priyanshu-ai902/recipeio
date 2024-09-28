import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Receipe from './components/receipe';
import Tables from './components/tables';
import About from './components/about';
import Contribute from './components/contribute';

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/recipe" element={<Receipe />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}
