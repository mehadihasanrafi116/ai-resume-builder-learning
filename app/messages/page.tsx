"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRef } from "react";
import { Avatar, Icon, SocialNavigation } from "../components/social-chrome";

const conversations = [
  { id: "sofia", name: "sofia.lee", avatar: "avatar-sofia", preview: "Sending you the little cafe I told you about ☕", time: "2m", online: true, messages: [{ text: "Hey Maya! I saw your photos from Lisbon — it looks like a dream ✨", side: "received" }, { text: "It really was! You have to go sometime 🌊", side: "sent" }, { text: "Sending you the little cafe I told you about ☕", side: "received" }] },
  { id: "jules", name: "julesmorgan", avatar: "avatar-jules", preview: "That sounds like the perfect Sunday", time: "1h", online: true, messages: [{ text: "Want to check out the flower market this weekend?", side: "received" }, { text: "That sounds like the perfect Sunday 🌷", side: "sent" }] },
  { id: "nina", name: "nina.rivers", avatar: "avatar-nina", preview: "You: I need to try this recipe!", time: "3h", online: false, messages: [{ text: "I made the lemon cake you shared!", side: "received" }, { text: "I need to try this recipe!", side: "sent" }] },
  { id: "theo", name: "theo.jpg", avatar: "avatar-theo", preview: "Loved your latest photo", time: "1d", online: false, messages: [{ text: "Loved your latest photo — such a peaceful spot.", side: "received" }] },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState("sofia");
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");
  const [sentMessages, setSentMessages] = useState<Record<string, string[]>>({});
  const composerRef = useRef<HTMLInputElement>(null);
  const selected = conversations.find((conversation) => conversation.id === selectedId) ?? conversations[0];
  const visibleConversations = conversations.filter((conversation) => conversation.name.toLowerCase().includes(search.trim().toLowerCase()));

  function startNewMessage() {
    setSelectedId("sofia");
    composerRef.current?.focus();
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = draft.trim();
    if (!message) return;
    setSentMessages((current) => ({ ...current, [selectedId]: [...(current[selectedId] ?? []), message] }));
    setDraft("");
  }

  return (
    <div className="app-shell">
      <SocialNavigation />
      <main className="main-content messages-main">
        <header className="screen-topbar">
          <div className="mobile-brand"><span className="brand-mark"><span /></span><span>bloom<span className="brand-period">.</span></span></div>
          <div><span className="eyebrow">YOUR LITTLE CONVERSATIONS</span><h1>Messages</h1></div>
          <button className="create-button new-message-button" type="button" onClick={startNewMessage}><Icon name="plus" size={17} /><span>New message</span></button>
        </header>

        <section className="messages-panel" aria-label="Messages">
          <aside className="conversation-sidebar">
            <div className="conversation-heading">
              <div><h2>Inbox</h2><p>A little hello goes a long way</p></div>
              <button className="icon-button" aria-label="New message" type="button" onClick={startNewMessage}><Icon name="plus" /></button>
            </div>
            <label className="conversation-search"><Icon name="search" size={16} /><input placeholder="Search messages" aria-label="Search messages" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
            <div className="conversation-list">
              {visibleConversations.map((conversation) => (
                <button type="button" className={`conversation-row${conversation.id === selectedId ? " selected" : ""}`} onClick={() => setSelectedId(conversation.id)} key={conversation.id}>
                  <span className="conversation-avatar"><Avatar name={conversation.avatar} label={conversation.name} />{conversation.online && <span className="online-dot" />}</span>
                  <span className="conversation-copy"><strong>{conversation.name}</strong><small>{conversation.preview}</small></span>
                  <span className="conversation-time">{conversation.time}</span>
                </button>
              ))}
              {visibleConversations.length === 0 && <p className="empty-state">No conversations found.</p>}
            </div>
          </aside>

          <section className="chat-panel" aria-label={`Conversation with ${selected.name}`}>
            <header className="chat-header">
              <span className="conversation-avatar"><Avatar name={selected.avatar} label={selected.name} />{selected.online && <span className="online-dot" />}</span>
              <span><strong>{selected.name}</strong><small>{selected.online ? "Online now" : "Usually replies in a little while"}</small></span>
              <button className="icon-button chat-more" aria-label="More conversation options" type="button"><Icon name="more" /></button>
            </header>
            <div className="chat-history" aria-live="polite">
              <div className="chat-date">TODAY, A LITTLE WHILE AGO</div>
              {selected.messages.map((message, index) => <div className={`chat-message ${message.side}`} key={`${selectedId}-starter-${index}`}>{message.text}</div>)}
              {(sentMessages[selectedId] ?? []).map((message, index) => <div className="chat-message sent" key={`${selectedId}-${index}`}>{message}</div>)}
            </div>
            <form className="message-composer" onSubmit={sendMessage}>
              <button type="button" aria-label="Add an attachment"><Icon name="plus" size={18} /></button>
              <input ref={composerRef} aria-label="Write a message" placeholder="Write a little something..." value={draft} onChange={(event) => setDraft(event.target.value)} />
              <button className="send-message-button" type="submit" aria-label="Send message" disabled={!draft.trim()}><Icon name="send" size={17} /></button>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
}
