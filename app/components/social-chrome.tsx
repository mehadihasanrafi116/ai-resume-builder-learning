"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type IconName =
  | "home"
  | "explore"
  | "messages"
  | "saved"
  | "profile"
  | "settings"
  | "plus"
  | "search"
  | "heart"
  | "comment"
  | "send"
  | "more"
  | "sparkles"
  | "arrow";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    explore: <><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.5 5.1-5.1 2.5 2.5-5.1z" /></>,
    messages: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" /></>,
    saved: <><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z" /></>,
    profile: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.1.9-1 1.8-1.3-.5a7.6 7.6 0 0 1-1.4.8l-.2 1.4h-2.1l-.2-1.4a7.6 7.6 0 0 1-1.4-.8l-1.3.5-1-1.8 1.1-.9a7.3 7.3 0 0 1 0-1.6l-1.1-.9 1-1.8 1.3.5a7.6 7.6 0 0 1 1.4-.8l.2-1.4h2.1l.2 1.4a7.6 7.6 0 0 1 1.4.8l1.3-.5 1 1.8-1.1.9a7.3 7.3 0 0 1 0 1.6Z" transform="translate(-1 -1) scale(1.08)" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
    comment: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z" /><path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1zM5 3v4M3 5h4" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export function Avatar({ name, label }: { name: string; label: string }) {
  return <span className={`avatar ${name}`} role="img" aria-label={label} />;
}

const links = [
  { href: "/", name: "home", label: "Home" },
  { href: "/explore", name: "explore", label: "Explore" },
  { href: "/messages", name: "messages", label: "Messages", count: "2" },
  { href: "/saved", name: "saved", label: "Saved" },
  { href: "/profile", name: "profile", label: "Profile" },
] as const;

export function SocialNavigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <aside className="left-sidebar">
        <Link className="brand" href="/" aria-label="bloom home">
          <span className="brand-mark"><span /></span>
          <span>bloom<span className="brand-period">.</span></span>
        </Link>
        <div className="sidebar-label">MENU</div>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => {
            const count = "count" in link ? link.count : undefined;
            return (
              <Link className={`nav-link${isActive(link.href) ? " active" : ""}`} href={link.href} key={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
                <Icon name={link.name} /><span>{link.label}</span>
                {count && <span className="nav-count">{count}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">YOUR SPACE</div>
        <Link className="nav-link" href="/profile"><Icon name="settings" /><span>Settings</span></Link>
        <div className="sidebar-promo">
          <span className="promo-sparkle"><Icon name="sparkles" size={18} /></span>
          <p className="promo-title">Make room for good things.</p>
          <p className="promo-copy">Your little corner of the internet is just getting started.</p>
          <Link href="/explore">Explore your feed <Icon name="arrow" size={15} /></Link>
          <div className="promo-decoration decoration-one" />
          <div className="promo-decoration decoration-two" />
        </div>
        <Link className="sidebar-profile" href="/profile">
          <Avatar name="avatar-maya" label="Maya Chen" />
          <span className="sidebar-profile-copy"><strong>Maya Chen</strong><small>@mayachen</small></span>
          <Icon name="more" size={19} />
        </Link>
      </aside>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.filter(({ name }) => name === "home" || name === "explore").map(({ href, name, label }) => (
          <Link className={`${isActive(href) ? "active " : ""}${name === "messages" ? "mobile-messages" : ""}`} href={href} aria-label={label} aria-current={isActive(href) ? "page" : undefined} key={href}>
            <Icon name={name} />
          </Link>
        ))}
        <button className="mobile-create" type="button" aria-label="Create post"><Icon name="plus" /></button>
        {links.filter(({ name }) => name === "messages" || name === "profile").map(({ href, name, label }) => (
          <Link className={isActive(href) ? "active" : ""} href={href} aria-label={label} aria-current={isActive(href) ? "page" : undefined} key={href}>
            <Icon name={name} />
          </Link>
        ))}
      </nav>
    </>
  );
}
