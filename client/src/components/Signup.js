import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../gqloperations/mutations";
export default function Signup() {
  const [formData, setFormData] = useState({});
  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);
  if (loading) return <h1>loading</h1>;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables: {
        userNew: formData,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}

      {data && data.user && (
        <div className="green card-panel">
          {data.user.firstName} is SignedUp. You can login now!
        </div>
      )}
      <h5>Signup!!</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          required
        />
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
          <p>Already have an Account </p>
          <Link to="/login ">
            <p> Login </p>
          </Link>
        </div>

        <button className="btn #7e57c2 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
