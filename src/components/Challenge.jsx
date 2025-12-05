import React from 'react';

const Challenge = () => {
  return (
    <section id="challenge" className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
          LE DÉFI <span style={{ color: 'var(--accent-color)' }}>2025</span>
        </h2>

        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
            Sujet à venir...
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
            Le sujet de cette année n'a pas encore été dévoilé (ou le PDF était illisible !).
            Mais ne vous inquiétez pas, notre équipe est prête à relever tous les défis.
          </p>

          <div style={{
            padding: '1.5rem',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '0.5rem',
            borderLeft: '4px solid var(--accent-color)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Objectifs Potentiels :</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#aaa' }}>
              <li>Développement Web Responsif</li>
              <li>Accessibilité (A11y)</li>
              <li>Green IT & Éco-conception</li>
              <li>Innovation & Créativité</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
