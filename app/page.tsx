import { Avatar, Icon, SocialNavigation } from "./components/social-chrome";

const stories = [
  { name: "Your story", avatar: "avatar-you", own: true },
  { name: "sofia.lee", avatar: "avatar-sofia" },
  { name: "julesmorgan", avatar: "avatar-jules" },
  { name: "theo.jpg", avatar: "avatar-theo" },
  { name: "nina.rivers", avatar: "avatar-nina" },
  { name: "kai.and.co", avatar: "avatar-kai" },
];

const suggestions = [
  { name: "amelia.rose", note: "Followed by sofia.lee", avatar: "avatar-amelia" },
  { name: "milesaway", note: "New to bloom", avatar: "avatar-miles" },
  { name: "nora.finds", note: "Followed by julesmorgan", avatar: "avatar-nora" },
];

export default function Home() {
  return (
    <div className="app-shell">
      <SocialNavigation />

      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand">
            <span className="brand-mark"><span /></span>
            <span>bloom<span className="brand-period">.</span></span>
          </div>
          <div className="topbar-title">
            <span className="eyebrow">YOUR CORNER OF THE INTERNET</span>
            <h1>A little more you, <span>Maya.</span></h1>
          </div>
          <div className="topbar-actions">
            <label className="search-box">
              <Icon name="search" size={18} />
              <input aria-label="Search bloom" placeholder="Search anything..." />
              <kbd>⌘ K</kbd>
            </label>
            <button className="create-button" type="button">
              <Icon name="plus" size={18} /><span>Create post</span>
            </button>
            <button className="mobile-search" type="button" aria-label="Search">
              <Icon name="search" />
            </button>
          </div>
        </header>

        <div className="content-grid">
          <section className="feed-column" aria-label="Your feed">
            <section className="stories-section" aria-labelledby="stories-title">
              <div className="section-heading">
                <div>
                  <h2 id="stories-title">Your circle</h2>
                  <p>A few little moments to catch up on</p>
                </div>
                <a className="text-link" href="#">See all <Icon name="arrow" size={15} /></a>
              </div>
              <div className="stories-list">
                {stories.map((story) => (
                  <a className="story" href="#" key={story.name}>
                    <span className={`story-ring${story.own ? " own-story" : ""}`}>
                      <Avatar name={story.avatar} label={story.name} />
                      {story.own && <span className="story-add"><Icon name="plus" size={12} /></span>}
                    </span>
                    <span className="story-name">{story.name}</span>
                  </a>
                ))}
              </div>
            </section>

            <div className="feed-heading">
              <div className="feed-heading-title">
                <h2>Your feed</h2>
                <span className="feed-live-dot" />
              </div>
              <button type="button" className="sort-button">For you <span>⌄</span></button>
            </div>

            <article className="post-card">
              <div className="post-header">
                <Avatar name="avatar-sofia" label="Sofia Lee" />
                <div className="post-author">
                  <strong>sofia.lee <span className="verified-mark">✦</span></strong>
                  <span>Lisbon, Portugal <span className="meta-dot">·</span> 2 hours ago</span>
                </div>
                <button className="icon-button post-more" type="button" aria-label="More post options">
                  <Icon name="more" />
                </button>
              </div>

              <div
                className="post-photo"
                role="img"
                aria-label="Sunlit Mediterranean coastline with turquoise water and a striped beach umbrella"
              >
                <span className="photo-tag"><span /> LITTLE ESCAPES</span>
                <span className="photo-count">1 / 4</span>
              </div>

              <div className="post-content">
                <div className="post-actions">
                  <div className="post-action-group">
                    <button className="icon-button heart-button" type="button" aria-label="Like post">
                      <Icon name="heart" size={22} />
                    </button>
                    <button className="icon-button" type="button" aria-label="Comment">
                      <Icon name="comment" size={21} />
                    </button>
                    <button className="icon-button" type="button" aria-label="Share post">
                      <Icon name="send" size={20} />
                    </button>
                  </div>
                  <button className="icon-button" type="button" aria-label="Save post">
                    <Icon name="saved" size={21} />
                  </button>
                </div>
                <p className="post-likes">Liked by <strong>julesmorgan</strong> and <strong>2,481 others</strong></p>
                <p className="post-caption">
                  <strong>sofia.lee</strong> Took the long way home and somehow ended up here. Not mad about it. <span>🌊</span>
                </p>
                <button className="comments-link" type="button">View all 84 comments</button>
                <div className="post-comment">
                  <span>Add a little something...</span>
                  <span className="comment-emoji">☺</span>
                </div>
              </div>
            </article>

            <article className="post-card second-post">
              <div className="post-header">
                <Avatar name="avatar-theo" label="Theo James" />
                <div className="post-author">
                  <strong>theo.jpg</strong>
                  <span>Somewhere in the city <span className="meta-dot">·</span> 4 hours ago</span>
                </div>
                <button className="icon-button post-more" type="button" aria-label="More post options">
                  <Icon name="more" />
                </button>
              </div>
              <div
                className="post-photo post-photo-city"
                role="img"
                aria-label="A quiet city street in the golden light of the afternoon"
              >
                <span className="photo-tag"><span /> SLOW SUNDAY</span>
              </div>
              <div className="post-content compact-post-content">
                <div className="post-actions">
                  <div className="post-action-group">
                    <button className="icon-button heart-button" type="button" aria-label="Like post"><Icon name="heart" size={22} /></button>
                    <button className="icon-button" type="button" aria-label="Comment"><Icon name="comment" size={21} /></button>
                    <button className="icon-button" type="button" aria-label="Share post"><Icon name="send" size={20} /></button>
                  </div>
                  <button className="icon-button" type="button" aria-label="Save post"><Icon name="saved" size={21} /></button>
                </div>
                <p className="post-likes">Liked by <strong>maya.chen</strong> and <strong>936 others</strong></p>
                <p className="post-caption"><strong>theo.jpg</strong> A reminder to take the scenic route.</p>
              </div>
            </article>
          </section>

          <aside className="right-sidebar" aria-label="Discover and suggestions">
            <section className="daily-note">
              <div className="note-topline"><span>MONDAY MOMENT</span><span className="note-sparkle">✳</span></div>
              <p>“Almost everything will work again if you unplug it for a few minutes, including you.”</p>
              <span className="note-credit">— Anne Lamott</span>
              <div className="note-orbit orbit-a" />
              <div className="note-orbit orbit-b" />
            </section>

            <section className="suggestions-section">
              <div className="side-section-heading">
                <div><h2>People to know</h2><p>Good people, good energy</p></div>
                <a href="#" aria-label="See all suggestions">···</a>
              </div>
              <div className="suggestion-list">
                {suggestions.map((person) => (
                  <div className="suggestion" key={person.name}>
                    <Avatar name={person.avatar} label={person.name} />
                    <div className="suggestion-copy">
                      <strong>{person.name}</strong>
                      <span>{person.note}</span>
                    </div>
                    <button type="button">Follow</button>
                  </div>
                ))}
              </div>
              <a className="all-suggestions" href="#">See all suggestions <Icon name="arrow" size={14} /></a>
            </section>

            <section className="trending-section">
              <div className="side-section-heading">
                <div><h2>Little things trending</h2><p>What the community is into</p></div>
                <span className="trending-sparkle">✳</span>
              </div>
              <a className="trend-item" href="#">
                <span className="trend-number">01</span>
                <span className="trend-copy"><strong>#slowliving</strong><small>2.4k little moments</small></span>
                <span className="trend-arrow">↗</span>
              </a>
              <a className="trend-item" href="#">
                <span className="trend-number">02</span>
                <span className="trend-copy"><strong>#weekendwanders</strong><small>1.8k little moments</small></span>
                <span className="trend-arrow">↗</span>
              </a>
              <a className="trend-item" href="#">
                <span className="trend-number">03</span>
                <span className="trend-copy"><strong>#tableforfriends</strong><small>986 little moments</small></span>
                <span className="trend-arrow">↗</span>
              </a>
            </section>

            <footer className="sidebar-footer">
              <a href="#">About</a><a href="#">Guidelines</a><a href="#">Privacy</a><a href="#">Terms</a>
              <span>© 2024 BLOOM SOCIAL</span>
            </footer>
          </aside>
        </div>
      </main>

    </div>
  );
}
