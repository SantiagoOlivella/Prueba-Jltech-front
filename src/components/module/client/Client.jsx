import axios from "axios";

export default {
  //   Delete

  saveClient: async (data, setLoading, type) => {
    const perfil = JSON.parse(localStorage.getItem("user"));
    const options = { headers: { authorization: "bearer " + perfil.token } };
    try {
      setLoading(true);
      const { client } = await axios.post(
        `http://localhost:4000/${type}/add`,
        data,
        options
      );
      setLoading(false);
      alert(`${type} Saved`);
      document.querySelector("#form-data").reset();
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        alert(error.response.data.message);
      }
      console.log("Error saveClient", error.message);
    }
  },

  //List Client

  GetUsers: async (setLoading, type, setData) => {
    const perfil = JSON.parse(localStorage.getItem("user"));
    const options = { headers: { authorization: "bearer " + perfil.token } };
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4000/${type}`,
        options
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (!error.response.data.ok) {
        alert(error.response.data.message);
      }
      console.log("Error saveClient", error.message);
    }
  },
};
