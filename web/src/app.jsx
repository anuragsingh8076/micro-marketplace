import Login from "./pages/login";
import Register from "./pages/Register";
import Products from "./pages/Products";

export default function App() {
  const path = window.location.pathname;

  if (path === "/login") return <Login />;
  if (path === "/register") return <Register />;

  return <Products />;
}
