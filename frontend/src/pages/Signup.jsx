import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/signup",
        {
          name,
          email,
          password
        }
      );

      alert(res.data.message);

    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="container">

      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Signup</button>

      </form>

    </div>
  );
}

export default Signup;