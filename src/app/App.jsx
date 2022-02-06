import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";
import { ModuleClient } from "../components/module/moduleClient/ModuleClient";
import { ModuleProduct } from "../components/module/moduleProduct/ModuleProduct";
import { ModuleShopping } from "../components/module/moduleShopping/ModuleShopping";
import { ModuleUser } from "../components/module/moduleUser/ModuleUser";
import { Login } from "../components/login/Login";
import { Home } from "../components/module/home/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/client" exact element={<ModuleClient />} />
        <Route path="/product" exact element={<ModuleProduct />} />
        <Route path="/shopping" exact element={<ModuleShopping />} />
        <Route path="/user" exact element={<ModuleUser />} />
      </Routes>
    </Router>
  );
}

export default App;
