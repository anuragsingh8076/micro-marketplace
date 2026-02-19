import { useState } from "react";
import { API } from "../api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return alert("Registration failed");

    alert("Registered successfully");
    window.location.href = "/login";
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>

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

      <button onClick={register} style={styles.button}>
        Register
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
    background: "#16a34a",
    color: "#fff",
    border: "none"
  }
};
