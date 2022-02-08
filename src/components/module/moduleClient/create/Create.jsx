import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../../../../helpers/loading/Loading";
import Client from "../../client/Client";
import "./Create.scss";

export const Create = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange" || "onSubmit",
  });

  const onSubmit = (data) => {
    const saveClient = Client.saveClient(data, setLoading, "client");
  };

  return (
    <div className="container-form">
      {loading ? (
        <Loading />
      ) : (
        <div className="formulario__info">
          <form onSubmit={handleSubmit(onSubmit)} id="form-data">
            <input
              {...register("nombre", { required: true, maxLength: 20 })}
              placeholder="Nombre"
              autoFocus={true}
              type="text"
            />
            <input
              {...register("contacto", {
                required: true,
                maxLength: 10,
                minLength: 6,
              })}
              placeholder="Celular"
              autoFocus={true}
              type="number"
            />
            <input
              {...register("correo", {
                required: true,
                pattern:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
              })}
              placeholder="Correo"
              autoFocus={true}
              type="email"
            />
            <input
              {...register("shopping", { required: true, minLength: 24 })}
              placeholder="Shopping"
              autoFocus={true}
            />
            <div className="list-error">
              <ul>
                <li>{errors.nombre && <span>El nombre es requerido</span>} </li>
                <li>
                  {errors.contacto && <span>El contacto es requerido</span>}
                </li>
                <li>{errors.correo && <span>El correo es requerido</span>}</li>
                <li>
                  {errors.shopping && <span>Ingrese una compra valida</span>}
                </li>
              </ul>
            </div>
            <div className="boton-form">
              <button className="btn btn-warning mb-3" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
