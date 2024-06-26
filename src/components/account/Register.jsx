import { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (localStorage.getItem(username)) {
      alert("User already exists!");
    } else {
      localStorage.setItem(username, password);
      alert("User registered successfully!");
    }
  };

  return (
    <section className="bg-zinc-800 py-40">
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="form-input"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-input"
            required
          />
          <button type="submit" className="primary-btn">
            Register
          </button>
        </form>
        <div className="form-link">
          <span>Already have an account? </span>
          <a href="/login" className="text-primary-purple">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};
