import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Background from './components/Background';
import Cursor from './components/Cursor';
import SkillHive from './components/SkillHive';
import Certifications from './components/Certifications';
import Education from './components/Education';

function App() {
  return (
    <div className="app">
      <Background />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <SkillHive />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
