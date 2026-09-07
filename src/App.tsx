import Navbar from './components/Navbar';
import NeuralBackdrop from './components/NeuralBackdrop';
import ErrorBoundary from './components/ErrorBoundary';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import BentoGrid from './components/BentoGrid';
import SkillHive from './components/SkillHive';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

/**
 * Every section renders as ordinary, natively-scrolling DOM.
 *
 * The WebGL scene used to own the whole page via drei <ScrollControls>, which
 * meant no content existed until three.js booted — invisible to crawlers that
 * do not execute JavaScript — and scroll height was pinned to a hardcoded
 * nine viewports. The scene is now a decorative layer behind the content.
 */
function App() {
    useReveal();

    return (
        <ErrorBoundary>
            <a href="#main" className="skip-link">Skip to content</a>

            <NeuralBackdrop />
            <Cursor />
            <Navbar />

            <main id="main" className="content">
                <Hero />
                <About />
                <BentoGrid />
                <SkillHive />
                <Experience />
                <Certifications />
                <Education />
            </main>

            <Footer />
        </ErrorBoundary>
    );
}

export default App;
