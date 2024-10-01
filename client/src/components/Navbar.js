import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/ " class="brand-logo left">
          Quote App
        </Link>

        <ul id="nav-mobile" class="right ">
          {token ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/createquote">CreateQuote</Link>{" "}
              </li>

              <li>
                <button
                  className="red btn-small"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
