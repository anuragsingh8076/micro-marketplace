import { useState } from "react";
import Login from "./screens/Login";
import Products from "./screens/Products";

export default function App() {
  const [token, setToken] = useState(null);

  if (!token) return <Login onLogin={setToken} />;

  return <Products token={token} />;
}
