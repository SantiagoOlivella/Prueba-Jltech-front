import React, { useState } from "react";
import { Link } from "react-router-dom";
import Client from "../../client/Client";
import "./ListCliente.scss";
import axios from "axios";

export const ListCliente = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState({});
  const perfil = JSON.parse(localStorage.getItem("user"));
  const options = { headers: { authorization: "bearer " + perfil.token } };

  const deleteClient = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(
        " http://localhost:4000/client/delete/" + id,
        options
      );
      setLoading(false);
      alert(data.message);
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message);
      console.log("Error deleteNote", error.message);
    }
  };

  const GetUsers = () => {
    const listClient = Client.GetUsers(setLoading, "client", setData);
  };

  return (
    <div>
      {Data.ok ? (
        <div className="mt-5 container">
          <div className="container text-center m-2">
            <Link to={"/home"} className="btn btn-primary me-3">
              Ir al Home
            </Link>
            <button className="btn btn-primary" onClick={() => GetUsers()}>
              Volver a cargar
            </button>
          </div>
          <div className="row">
            {Data.client.map((cliente) => (
              <div className="col-md-4" key={cliente._id}>
                <div className="card-group">
                  <div className="card m-3">
                    <div className="card-header">
                      <strong> {cliente.nombre} </strong>
                      <div className="personal-info mt-3">
                        <strong>Correo</strong>
                        <p className="lead"> {cliente.correo} </p>
                        <strong>Contacto</strong>
                        <p> {cliente.contacto} </p>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="title-info-shopping">
                        <h5 className="text-center">Shopping</h5>
                      </div>
                      {cliente.shopping !== null &&
                      cliente.shopping !== undefined ? (
                        <div className="info-Shopping">
                          <ul>
                            <li>
                              <strong>Cantidad:</strong>{" "}
                              {cliente.shopping.cantidad}
                            </li>
                            <li>
                              <strong>cliente:</strong>{" "}
                              {cliente.shopping.cliente}
                            </li>
                            <li>
                              <strong>fecha:</strong> {cliente.shopping.fecha}
                            </li>
                            <li>
                              <strong>nFactura:</strong>{" "}
                              {cliente.shopping.nFactura}
                            </li>
                            <li>
                              <strong>productos:</strong>{" "}
                              {cliente.shopping.productos}
                            </li>
                            <li>
                              <strong>valor:</strong> {cliente.shopping.valor}
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div className="sin-infoShoping">
                          <p>El cliente no posee información de compras</p>
                        </div>
                      )}
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                      <i
                        className="btn btn-danger fa fa-trash"
                        onClick={() => deleteClient(cliente._id)}
                      ></i>
                      <Link
                        to={"/update/" + cliente._id}
                        className="btn btn-warning fa fa-edit"
                      >
                        {/* onClick={() => Navigate("/update/" + cliente._id)} */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container container-button m-5">
          <button className="btn btn-dark" onClick={() => GetUsers()}>
            Ver listado de Clientes
          </button>
        </div>
      )}
    </div>
  );
};
