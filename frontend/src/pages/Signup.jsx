import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/signup",
        {
          name,
          email,
          password,
          role
        }
      );

      alert(res.data.message);

    } catch (error) {

      alert(error.response?.data?.message || "Signup failed");

    }
  };

  return (
    <div className="container">

      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Role Selection */}

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="provider">Service Provider</option>
        </select>

        <button type="submit">Signup</button>

      </form>

    </div>
  );
}

export default Signup;