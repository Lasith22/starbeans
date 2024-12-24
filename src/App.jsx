import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
