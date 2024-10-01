import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gqloperations/mutations";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signinUser, { error, loading }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      navigate("/");
    },
  });

  if (loading) return;
  <h4>loading</h4>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser({
      variables: {
        userSignin: formData,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}

      <h5>Login here</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          required
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />

        <div>
          <p>Dont have an Account </p>

          <Link to="/signup">
            <p> Sign up</p>
          </Link>
        </div>
        <button className="btn #7e57c2 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
