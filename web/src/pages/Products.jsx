import { useEffect, useState } from "react";
import { API } from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/products`)
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {products.map(p => (
        <div key={p._id} style={{ background: "#fff", padding: 16 }}>
          <img src={p.image} width="100%" />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <button>❤️ Favorite</button>
        </div>
      ))}
    </div>
  );
}
