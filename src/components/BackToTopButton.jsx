import { useState, useEffect } from 'react';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'opacity 0.3s',
        }}
        aria-label="Back to top"
      >
        ↑ Back to Top
      </button>
    )
  );
}

export default BackToTopButton;