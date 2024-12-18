import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import AboutThreeCafes from './components/introduction/AboutThreeCafes';
import CraftingSection from './components/introduction/CraftingSection';
import Introduction from './components/introduction/Introduction';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <CraftingSection />
      <AboutThreeCafes />
      <Footer />
      {/* <Contact /> */}
    </>
  );
}

export default App;
