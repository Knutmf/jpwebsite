

export default function ScolfWorld() {
  return (
    <section className="worldbuilding-section">
  <h2>🌍 The World of Skolf</h2>
  <p className="world-intro">
    Step into Skolf — a realm shaped by ancient alliances, shattered empires, and hidden magic. Explore the lands, cultures, and mysteries that bring this world to life.
  </p>

  <div className="world-grid">
    {/* Region 1 */}
    <div className="world-card">
      <img src="/images/skolf-map.jpg" alt="Map of Skolf" />
      <h3>The Five Realms</h3>
      <p>
        Skolf is divided into five powerful realms, each with its own rulers, agendas, and legends. From frost-covered peaks to desert fortresses, every land holds secrets.
      </p>
    </div>

    {/* Region 2 */}
    <div className="world-card">
      <img src="/images/old-gods.jpg" alt="Old Gods artwork" />
      <h3>The Old Gods</h3>
      <p>
        Long before written history, godlike entities shaped Skolf’s fate. Though most have vanished, their influence echoes in forbidden magic and ancient ruins.
      </p>
    </div>

    {/* Region 3 */}
    <div className="world-card">
      <img src="/images/guilds.jpg" alt="Guild banners" />
      <h3>The Factions & Guilds</h3>
      <p>
        From mercenary guilds to scholarly orders, Skolf’s factions shape power and politics behind the scenes. Loyalties shift, and influence is often bought in blood.
      </p>
    </div>

    {/* Region 4 */}
    <div className="world-card">
      <img src="/images/beasts.jpg" alt="Fantasy beasts" />
      <h3>Creatures & Beasts</h3>
      <p>
        Skolf is alive with mythical creatures — from soulbound wolves to sky leviathans. Some are allies, others are nightmares.
      </p>
    </div>
  </div>
</section>
  
  );
}