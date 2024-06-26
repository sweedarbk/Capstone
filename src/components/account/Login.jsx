import { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem(username) === password) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <section className="bg-zinc-800 py-40">
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="primary-btn">Login</button>
      </form>
      <div className="form-link">
        <span>Don't have an account? </span>
        <a href="/register" className="text-primary-purple">Register</a>
      </div>
    </div>
    </section>
  );
};