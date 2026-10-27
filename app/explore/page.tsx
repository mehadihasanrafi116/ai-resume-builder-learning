"use client";

import { useMemo, useState } from "react";
import { Icon, SocialNavigation } from "../components/social-chrome";

const discoveries = [
  { person: "sofia.lee", place: "Algarve, Portugal", tag: "Travel", image: "discover-coast", likes: "2.4k" },
  { person: "nina.rivers", place: "A slower kind of morning", tag: "Slow living", image: "discover-breakfast", likes: "986" },
  { person: "kai.and.co", place: "A little green escape", tag: "Nature", image: "discover-green", likes: "1.2k" },
  { person: "julesmorgan", place: "Sunday at the market", tag: "Everyday", image: "discover-market", likes: "843" },
  { person: "theo.jpg", place: "Somewhere in the city", tag: "Travel", image: "discover-city", likes: "1.8k" },
  { person: "amelia.rose", place: "For the love of flowers", tag: "Nature", image: "discover-flowers", likes: "3.1k" },
];

const filters = ["For you", "Travel", "Nature", "Slow living", "Everyday"];

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("For you");
  const [search, setSearch] = useState("");

  const visibleDiscoveries = useMemo(() => discoveries.filter((item) => {
    const matchesFilter = activeFilter === "For you" || item.tag === activeFilter;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${item.person} ${item.place} ${item.tag}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  }), [activeFilter, search]);

  return (
    <div className="app-shell">
      <SocialNavigation />
      <main className="main-content">
        <header className="screen-topbar">
          <div className="mobile-brand"><span className="brand-mark"><span /></span><span>Hashirama<span className="brand-period">.</span></span></div>
          <div><span className="eyebrow">A LITTLE INSPIRATION</span><h1>Explore</h1></div>
          <label className="search-box explore-search">
            <Icon name="search" size={18} />
            <input aria-label="Search explore" placeholder="Search people, places, moments..." value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
        </header>

        <div className="explore-page">
          <section className="explore-intro">
            <div>
              <span className="screen-kicker">FIND YOUR NEXT LITTLE THING</span>
              <h2>Good things are <span>out there.</span></h2>
              <p>Fresh perspectives, lovely places, and small moments worth keeping.</p>
            </div>
            <span className="explore-sparkle" aria-hidden="true">✳</span>
          </section>

          <nav className="explore-filters" aria-label="Explore categories">
            {filters.map((filter) => (
              <button type="button" className={activeFilter === filter ? "selected" : ""} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} key={filter}>
                {filter}
              </button>
            ))}
          </nav>

          <div className="explore-grid" aria-live="polite">
            {visibleDiscoveries.map((item) => (
              <article className="discover-card" key={item.person}>
                <div className={`discover-image ${item.image}`} role="img" aria-label={item.place}>
                  <span className="discover-tag">{item.tag}</span>
                  <span className="discover-likes"><Icon name="heart" size={14} /> {item.likes}</span>
                </div>
                <div className="discover-caption">
                  <span><strong>{item.person}</strong><small>{item.place}</small></span>
                  <button type="button" aria-label={`Save ${item.person}'s post`}><Icon name="saved" size={18} /></button>
                </div>
              </article>
            ))}
            {visibleDiscoveries.length === 0 && <p className="empty-state">No moments found. Try another search or category.</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
