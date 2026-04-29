import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-white selection:text-black">
        <div className="noise" />
        <CustomCursor />
        <Navigation />
        <main>
          <Hero />
          <About />
          <ProjectGallery />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
