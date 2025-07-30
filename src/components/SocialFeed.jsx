import { useState, useEffect } from 'react';

function SocialFeed() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="social-feed" id="socialmedia">
      <h2>Follow Me on Social Media: </h2>
      {loaded && (
        <div className="social-widgets" style={{ display: 'flex', gap: '1rem' }}>
          <iframe
            src="https://apps.elfsight.com/widget/a0763579-0463-46bb-9a88-a102839eecfe"
            title="Social Widget 1"
            style={{ flex: 1, height: '500px', border: 'none' }}
            allowtransparency="true"
            scrolling="yes"
          ></iframe>

          <iframe
            src="https://apps.elfsight.com/widget/d615d401-2149-464d-8e3e-2946107aa206"
            title="Social Widget 2"
            style={{ flex: 1, height: '500px', border: 'none' }}
            allowtransparency="true"
            scrolling="yes"
          ></iframe>

          <iframe
            src="https://apps.elfsight.com/widget/204c1e77-85ba-44f3-ad0f-cc57180f7357"
            title="Social Widget 3"
            style={{ flex: 1, height: '500px', border: 'none' }}
            allowtransparency="true"
            scrolling="yes"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default SocialFeed;