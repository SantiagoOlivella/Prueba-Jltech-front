import "./NavBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
// import { useUser } from "../context/UserContext";

export const NavBar = () => {
//   const { user, exit } = useUser();
const user={login:true, name:"prueba"}

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user.login ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="noteDrop"
                >
                  Notes
                </a>
                <ul className="dropdown-menu" aria-labelledby="noteDrop">
                  <li>
                    <NavLink to={"/client"} className="dropdown-item">
                      Clientes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/product"} className="dropdown-item">
                      Productos
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/" activeclassname="active">
                  <i className="fa fa-user ">Welcome {user.name} </i>
                </NavLink>
              </li>
              <li className="nav-item me-3" onClick={() => exit()}>
                <NavLink className="nav-link" to="/" activeclassname="active">
                  <i className="fa fa-sign-out-alt ">Exit </i>
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/" activeclassname="active">
                  <i className="fa fa-user"> Login</i>
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link"
                  to="/register"
                  activeclassname="active"
                >
                  <i className="fa fa-sign-out-alt"> Register</i>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
