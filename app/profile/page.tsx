"use client";

import { useState } from "react";
import { Avatar, Icon, SocialNavigation } from "../components/social-chrome";

const profilePosts = [
  { image: "profile-photo-coast", label: "A little time by the sea" },
  { image: "profile-photo-coffee", label: "Slow mornings and coffee" },
  { image: "profile-photo-flowers", label: "Flowers from the weekend market" },
  { image: "profile-photo-city", label: "An afternoon in the city" },
  { image: "profile-photo-table", label: "Dinner with my favorite people" },
  { image: "profile-photo-green", label: "A quiet walk outside" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Posts");
  const [editing, setEditing] = useState(false);

  return (
    <div className="app-shell">
      <SocialNavigation />
      <main className="main-content profile-main">
        <header className="screen-topbar">
          <div className="mobile-brand"><span className="brand-mark"><span /></span><span>bloom<span className="brand-period">.</span></span></div>
          <div><span className="eyebrow">YOUR OWN LITTLE CORNER</span><h1>Profile</h1></div>
          <button className="profile-menu-button" type="button" aria-label="More profile options"><Icon name="more" /></button>
        </header>

        <section className="profile-page">
          <header className="profile-summary">
            <Avatar name="avatar-maya profile-avatar" label="Maya Chen" />
            <div className="profile-details">
              <div className="profile-name-row"><h2>mayachen</h2><button className="profile-edit-button" type="button" onClick={() => setEditing(!editing)}>{editing ? "Done" : "Edit profile"}</button><button className="icon-button profile-settings" type="button" aria-label="Profile settings"><Icon name="settings" size={19} /></button></div>
              <div className="profile-stats"><span><strong>24</strong> posts</span><span><strong>1,284</strong> followers</span><span><strong>386</strong> following</span></div>
              <div className="profile-bio"><strong>Maya Chen</strong><p>Collecting little moments, good light & places with good coffee ☁️<br />Currently somewhere by the sea.</p><span>↗ mayachen.com</span></div>
              {editing && <p className="edit-hint" role="status">Your profile is ready to edit — this is a design preview.</p>}
            </div>
          </header>

          <div className="profile-highlights">
            {[
              ["highlight-weekends", "weekends"],
              ["highlight-little", "little joys"],
              ["highlight-travel", "away"],
              ["highlight-table", "around here"],
            ].map(([image, label]) => <button className="highlight-item" type="button" key={label}><span className={`highlight-image ${image}`} /><span>{label}</span></button>)}
          </div>

          <nav className="profile-tabs" aria-label="Profile posts">
            {["Posts", "Saved", "Tagged"].map((tab) => <button className={activeTab === tab ? "active" : ""} aria-pressed={activeTab === tab} onClick={() => setActiveTab(tab)} type="button" key={tab}><Icon name={tab === "Saved" ? "saved" : tab === "Tagged" ? "profile" : "home"} size={16} />{tab}</button>)}
          </nav>

          {activeTab === "Posts" ? (
            <div className="profile-post-grid">
              {profilePosts.map((post, index) => <button className={`profile-post ${post.image}`} type="button" aria-label={post.label} key={post.image}><span><Icon name="heart" size={16} /> {["248", "196", "312", "174", "421", "203"][index]}</span></button>)}
            </div>
          ) : (
            <div className="profile-empty">
              <span><Icon name={activeTab === "Saved" ? "saved" : "profile"} size={25} /></span>
              <h3>{activeTab === "Saved" ? "Your saved moments" : "Photos of you"}</h3>
              <p>{activeTab === "Saved" ? "The little things you bookmark will find a home here." : "When someone tags you in a moment, you’ll find it here."}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
