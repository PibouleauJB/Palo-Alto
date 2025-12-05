import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <Hero />
      <Challenge />
      <Team />

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: '#666',
        marginTop: '4rem'
      }}>
        <p>&copy; 2025 Nuit de l'Info Team. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
