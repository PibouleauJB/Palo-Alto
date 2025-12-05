import React from 'react';

const Team = () => {
  const members = [
    { name: 'Alice', role: 'Frontend Wizard', color: 'var(--primary-color)' },
    { name: 'Bob', role: 'Backend Guru', color: 'var(--secondary-color)' },
    { name: 'Charlie', role: 'Design Master', color: 'var(--accent-color)' },
    { name: 'Dave', role: 'DevOps Ninja', color: '#ff0055' },
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
          L'ÉQUIPE <span style={{ color: 'var(--secondary-color)' }}>ELITE</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {members.map((member, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${member.color}, transparent)`,
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {member.name[0]}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
              <p style={{ color: '#aaa' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
