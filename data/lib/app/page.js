"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await fetch("/api/cards");
    const data = await res.json();

    const read = JSON.parse(localStorage.getItem("read") || "[]");

    const pool = data.filter(c => !read.includes(c.id));

    setCards(pool.sort(() => Math.random() - 0.5).slice(0, 10));
  }

  function markRead(id) {
    const read = JSON.parse(localStorage.getItem("read") || "[]");
    if (!read.includes(id)) {
      read.push(id);
      localStorage.setItem("read", JSON.stringify(read));
    }
  }

  function favorite(card) {
    const fav = JSON.parse(localStorage.getItem("fav") || "[]");
    fav.push(card);
    localStorage.setItem("fav", JSON.stringify(fav));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>卡片</h2>

      {cards.map(c => (
        <div key={c.id} style={{ margin: 10, padding: 10, border: "1px solid #ddd" }}>
          <p>{c.text}</p>

          <button onClick={() => markRead(c.id)}>已读</button>
          <button onClick={() => favorite(c)}>收藏</button>
        </div>
      ))}

      <button onClick={load}>下一批</button>
    </div>
  );
}
