
export default function MerchComponent() {
  

  return (
    <section className="merch-section">
      <h2 className="merch-heading">Shop Merch from the world of Skolf!</h2>

       {/* Teespring embed */}
      <iframe
        src="https://jp-corwyn.creator-spring.com/?utm_medium=referral&utm_source=twitch_integration&utm_campaign=jp-corwyn"
        title="Skolf Merch Store"
        width="100%"
        height="1000px"
        style={{ border: "none" }}
        scrolling="no"
      ></iframe>
    </section>
  );
}