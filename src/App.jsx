import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Reservations from './Pages/Reservations';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
