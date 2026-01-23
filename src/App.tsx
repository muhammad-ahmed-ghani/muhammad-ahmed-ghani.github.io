import Navbar from './components/Navbar';
import NeuralNexusCanvas from './components/NeuralNexusCanvas';
import ErrorBoundary from './components/ErrorBoundary';
import Cursor from './components/Cursor';

function App() {
    return (
        <ErrorBoundary>
            <div className="app">
                <Cursor />
                <Navbar />
                <NeuralNexusCanvas />
            </div>
        </ErrorBoundary>
    );
}

export default App;
