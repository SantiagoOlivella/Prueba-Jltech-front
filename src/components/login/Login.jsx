import "./Login.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../helpers/loading/Loading";

export const Login = () => {
  const [correo, setcorreo] = useState("ssajf@pruab.com");
  const [contraseña, setcontraseña] = useState("123");
  const { info } = useContext(UserContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const user = { correo, contraseña };
    info.loginUser(user, navigate);
  };

  return (
    <div>
      {info.loading ? (
        <Loading />
      ) : (
        <div className="row mt5">
          <div className="col-lg-6 col-md-8 mx-auto mt-5 card-Login">
            <div className="card card-icon">
              <div className="container text-center">
                <i className="fa fa-users fa-5x"></i>
              </div>
              <div className="card-header text-center">
                <h1 className="card-title">Login</h1>
                <h5 className="m-2">Bienvenido por favor ingrese su usuario y contraseña</h5>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-3">
                    <input
                      type="correo"
                      value={correo}
                      className="form-control"
                      placeholder="correo"
                      required
                      autoFocus
                      onChange={(e) => setcorreo(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="contraseña"
                      value={contraseña}
                      className="form-control"
                      placeholder="contraseña"
                      required
                      onChange={(e) => setcontraseña(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary form-control"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
