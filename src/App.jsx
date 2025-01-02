import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Reservations from './Pages/Reservations';
import TheBarnStarBeans from './Pages/outlets/TheBarnStarBeans';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/outlets/the-barn-outlet" element={<TheBarnStarBeans />} />
      </Routes>
    </>
  );
}

export default App;
