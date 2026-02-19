import { useState } from "react";
import { API } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return alert("Invalid credentials");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    alert("Login successful");
    window.location.href = "/";
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={login} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 300,
    margin: "50px auto",
    padding: 20,
    background: "#fff",
    borderRadius: 8
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 10
  },
  button: {
    width: "100%",
    padding: 10,
    background: "#2563eb",
    color: "#fff",
    border: "none"
  }
};
