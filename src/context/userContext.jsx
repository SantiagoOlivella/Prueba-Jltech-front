import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UserContext = createContext();
const valueInitial = { login: false, token: "", nombre: "", id: "", rol: "" };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(valueInitial);
  const [loading, setLoading] = useState(false);

  //Login User

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
          rol: data.rol,
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

  // Creamos la función para cerrar sesión

  const exit = () => {
    setUser(initialState);
    localStorage.removeItem("user");
  };

  const info = {
    user,
    loginUser,
    // registerUser,
    loading,
  };
  return (
    <UserContext.Provider value={{ info }}>{children}</UserContext.Provider>
  );
};
