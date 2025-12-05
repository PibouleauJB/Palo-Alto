import React from 'react';

const Hero = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--primary-color)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'var(--secondary-color)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1
      }} />

      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <h1 style={{ fontSize: '5rem', marginBottom: '1rem' }} className="text-glow">
          NUIT DE L'INFO <span style={{ color: 'var(--primary-color)' }}>2025</span>
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: '#aaa' }}>
          Le défi commence bientôt. Préparez-vous à coder.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <button onClick={() => document.getElementById('challenge').scrollIntoView({ behavior: 'smooth' })}>
            Découvrir le Sujet
          </button>
          <button style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }} onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}>
            L'Équipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
