import axios from "axios";
import Swal from "sweetalert2";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const initialState = { login: false, token: "", name: "", id: "" };

export const UserProvider = (props) => {

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? initial.login && setUser(initial) : setUser(initialState);
  }, []);


  const loginUser = async (user, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/user/login",
        user
      ); 
      setLoading(false);
      if (data.ok) {
        const userLogin = {
          login: true,
          token: data.token,
          nombre: data.nombre,
          id: data._id,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/home");
      }
    } catch (error) {
      setLoading(false);

      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log("Error loginUser", error.message);
    }
  };


  const registerUser = async (user, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        " http://localhost:4000/user/add",
        user
      );
      setLoading(false);
      if (data.ok) {
        const userLogin = {
          login: true,
          token: data.token,
          name: data.name,
          id: data._id,
        };
        localStorage.setItem("user", JSON.stringify(userLogin)); // Estamos guardando el objeto en el navegador
        setUser(userLogin);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/notes");
      }
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log("Error registerUser", error.message);
    }
  };

  // Creamos la función para cerrar sesión

  const exit = () => {
    setUser(initialState);
    localStorage.removeItem("user");
  };

  // Esto es lo que vamos a compartir en cualquier componente
  const value = {
    user,
    loginUser,
    registerUser,
    exit,
    loading,
  };

  return <UserContext.Provider value={value} {...props} />; //Retornamos la función que vamos a globalizar
};
// Exportamos el context

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser error");
  }
  return context;
}
