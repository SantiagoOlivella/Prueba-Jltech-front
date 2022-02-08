import "./Home.scss";
import clientes from "../../../other/img/clientes.jpg";
import compras from "../../../other/img/compras.jpg";
import productos from "../../../other/img/productos.webp";
import usuarios from "../../../other/img/usuarios.jpg";

import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
        <div className="container titleSeccion mt-5">
            <h1>Bienvenido al sistema de gestión de operaciones</h1>
        </div>
      <div className="container mt-5 p-5 container-cards">
        <div className="row">
          <div className="col p-3">
            <Link to="/client">
              <div className="card cardeach">
                <img
                  src={clientes}
                  className="card-img-top card-img-each"
                  alt="Clientes"
                />
                <div className="card-body card-body-text">
                  <h4 className="card-text">Gestión de clientes</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col p-3">
            <Link to="/shopping">
              <div className="card cardeach">
                <img
                  src={compras}
                  className="card-img-top card-img-each"
                  alt="Compras"
                />
                <div className="card-body card-body-text">
                  <h4 className="card-text">Gestión de Compras</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col p-3">
            <Link to="/product">
              <div className="card cardeach">
                <img
                  src={productos}
                  className="card-img-top card-img-each"
                  alt="Productos"
                />
                <div className="card-body card-body-text">
                  <h4 className="card-text">Gestión de Productos</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col p-3">
            <Link to="/user">
              <div className="card cardeach">
                <img
                  src={usuarios}
                  className="card-img-top card-img-each"
                  alt="Usuarios"
                />
                <div className="card-body card-body-text">
                  <h4 className="card-text">Gestión de Usuarios</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
