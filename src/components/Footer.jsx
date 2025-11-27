import React from "react";

export default function Footer() {
  return (
    <footer style={{
      padding: '1rem 2rem',
      backgroundColor: 'rgba(30, 64, 175, 0.9)',
      color: 'white',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '1rem',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)',
      minHeight: '120px'
    }}>
      <div style={{ flex: 1, minWidth: '220px' }}>
        <h3 style={{ 
          margin: '0 0 0.4rem 0', 
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span style={{
            background: '#3b82f6',
            borderRadius: '8px',
            width: '30px',
            height: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem'
          }}>⛑</span>
          SafeSphere
        </h3>
        <p style={{ 
          margin: 0, 
          lineHeight: '1.4',
          color: '#dbeafe',
          fontSize: '0.95rem'
        }}>
          Reducing disaster impact through community empowerment.
        </p>
      </div>
      
      <div style={{ flex: 1, minWidth: '120px' }}>
        <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem' }}>Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {['Home', 'Reports', 'Resources', 'Volunteers'].map((item) => (
            <li key={item} style={{ marginBottom: '0.2rem' }}>
              <a href="#" style={{
                color: '#dbeafe',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#ffffff'}
              onMouseOut={(e) => e.target.style.color = '#dbeafe'}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ flex: 1, minWidth: '180px' }}>
        <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.1rem' }}>Contact</h4>
        <div style={{ lineHeight: '1.4' }}>
          <p style={{ margin: '0.2rem 0', color: '#dbeafe', fontSize: '0.95rem' }}>
            ✉ support@safesphere.org
          </p>
          <p style={{ margin: '0.2rem 0', color: '#dbeafe', fontSize: '0.95rem' }}>
            📞 +91 98765 43210
          </p>
        </div>
      </div>
      
      <div style={{
        width: '100%',
        textAlign: 'center',
        marginTop: '0.8rem',
        paddingTop: '0.8rem',
        borderTop: '1px solid rgba(59, 130, 246, 0.5)',
        fontSize: '0.9rem',
        color: '#dbeafe'
      }}>
        © 2025 SafeSphere. All rights reserved.
      </div>
    </footer>
  );
}