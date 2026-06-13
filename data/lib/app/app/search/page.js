"use client";

import { useState } from "react";

export default function Search() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState([]);

  async function search() {
    const r = await fetch("/api/cards");
    const data = await r.json();

    setRes(data.filter(c => c.text.includes(q)));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>搜索</h2>

      <input value={q} onChange={e => setQ(e.target.value)} />
      <button onClick={search}>搜索</button>

      {res.map(r => (
        <div key={r.id}>{r.text}</div>
      ))}
    </div>
  );
}
