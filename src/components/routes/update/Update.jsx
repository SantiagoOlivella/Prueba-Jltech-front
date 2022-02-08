import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../../helpers/loading/Loading.jsx";
import "./Update.scss";

export const Update = () => {
  const [loading, setLoading] = useState(false);
  const perfil = JSON.parse(localStorage.getItem("user"));
  const options = { headers: { authorization: "bearer " + perfil.token } };
  const { id } = useParams();

  const updateClient = async (data) => {
    try {
      const { client } = await axios.put(
        " http://localhost:4000/client/update/" + id,
        data,
        options
      );
      alert("Update data");
      document.querySelector("#form-data").reset();
    } catch (error) {
      alert(error);
      console.log("Error updateClient", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange" || "onSubmit",
  });

  const onSubmit = (data) => {
    updateClient(data);
  };

  return (
    <div className="container-form">
      {loading ? (
        <Loading />
      ) : (
        <div className="container m-5 container-form">
          <div className="card card-form">
            <div className="title-form m-3">
              <h3 className="text-center">
                Por favor ingrese la información del formulario
              </h3>
            </div>
            <div className="formulario__info">
              <form onSubmit={handleSubmit(onSubmit)} id="form-data">
                <input
                  {...register("nombre", { maxLength: 20 })}
                  placeholder="Nombre"
                  autoFocus={true}
                  type="text"
                />
                <input
                  {...register("contacto", {
                    maxLength: 10,
                    minLength: 6,
                  })}
                  placeholder="Celular"
                  autoFocus={true}
                  type="number"
                />
                <input
                  {...register("correo", {
                    pattern:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  })}
                  placeholder="Correo"
                  autoFocus={true}
                  type="email"
                />
                <input
                  {...register("shopping", { minLength: 24 })}
                  placeholder="Shopping"
                  autoFocus={true}
                />
                <div className="list-error">
                  <ul>
                    <li>
                      {errors.nombre && <span>El nombre es requerido</span>}{" "}
                    </li>
                    <li>
                      {errors.contacto && <span>El contacto es requerido</span>}
                    </li>
                    <li>
                      {errors.correo && <span>El correo es requerido</span>}
                    </li>
                    <li>
                      {errors.shopping && (
                        <span>Ingrese una compra valida</span>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="boton-form">
                  <button className="btn btn-warning mb-3" type="submit">
                    Registrar
                  </button>
                  <div className="buton-exit mb-2">
                    <Link className="btn btn-primary m-2 mb-3" to={"/home"}>
                      Ir al Home
                    </Link>
                    <Link className="btn btn-primary m-2 mb-3" to={"/client"}>
                      Ir al módulo de clientes
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
