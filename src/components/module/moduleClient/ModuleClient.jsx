import "./ModuleClient.scss";

import React from "react";
import { Link } from "react-router-dom";
import { Create } from "./create/Create";
import { ListCliente } from "./listClient/ListCliente";

export const ModuleClient = () => {
  const perfil = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="mt-3">
      {perfil.rol === "administrador" ||
      perfil.rol === "rh" ||
      perfil.rol === "vendedor" ? (
        <div className="title-modulo-cliente">
          <h1>Bienvenido a modulo de gestión de clientes</h1>
          <h3>Listado de clientes</h3>
          <div className="group-button-options">
            <div className="container mt-5 me-3">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample"
                    >
                      Crear Cliente
                    </button>
                  </p>
                  <div>
                    <div
                      className="collapse collapse-horizontal"
                      id="collapseWidthExample"
                    >
                      <div className="card card-body">{<Create />}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container container-clients">{<ListCliente />}</div>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Por favor verifique su usuario</h5>
              </div>
              <div className="modal-body">
                <p>
                  El usuario <strong>{perfil.nombre}</strong> no tiene acceso al
                  modulo de clientes
                </p>
              </div>
              <div className="modal-footer">
                <Link to={"/home"} className="btn btn-danger">
                  Ir al Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
