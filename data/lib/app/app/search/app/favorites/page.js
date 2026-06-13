"use client";

import { useEffect, useState } from "react";

export default function Favorites() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFav(JSON.parse(localStorage.getItem("fav") || "[]"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>收藏</h2>

      {fav.map((c, i) => (
        <div key={i} style={{ margin: 10 }}>
          {c.text}
        </div>
      ))}
    </div>
  );
}
