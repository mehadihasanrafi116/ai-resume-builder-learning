import { Icon, SocialNavigation } from "../components/social-chrome";

const savedMoments = [
  { className: "profile-photo-coast", title: "A little time by the sea", owner: "sofia.lee" },
  { className: "profile-photo-flowers", title: "For the love of flowers", owner: "amelia.rose" },
  { className: "profile-photo-table", title: "Dinner with my favorite people", owner: "nina.rivers" },
];

export default function SavedPage() {
  return (
    <div className="app-shell">
      <SocialNavigation />
      <main className="main-content">
        <header className="screen-topbar">
          <div className="mobile-brand"><span className="brand-mark"><span /></span><span>Hashirama<span className="brand-period">.</span></span></div>
          <div><span className="eyebrow">KEEP THE GOOD ONES CLOSE</span><h1>Saved moments</h1></div>
        </header>
        <section className="saved-page profile-page">
          <div className="saved-intro"><span><Icon name="saved" size={19} /></span><div><h2>A little collection of lovely</h2><p>Moments you wanted to come back to.</p></div></div>
          <div className="saved-grid">
            {savedMoments.map((moment) => (
              <article className="discover-card" key={moment.title}>
                <div className={`discover-image ${moment.className}`} role="img" aria-label={moment.title}>
                  <span className="discover-tag">SAVED FOR LATER</span>
                </div>
                <div className="discover-caption"><span><strong>{moment.owner}</strong><small>{moment.title}</small></span><Icon name="saved" size={17} /></div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
