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
import { UserProvider } from "../context/userContext";
import { Private } from "../components/routes/Private";
import { Public } from "../components/routes/Public";
import { Update } from "../components/routes/update/Update";

function App() {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Public><Login /></Public>} />
          <Route
            path="/home"
            exact
            element={
              <Private>
                <Home />{" "}
              </Private>
            }
          />
          <Route
            path="/client"
            exact
            element={
              <Private>
                <ModuleClient />{" "}
              </Private>
            }
          />
          <Route
            path="/update/:id"
            exact
            element={
              <Private>
                <Update />{" "}
              </Private>
            }
          />
          
          <Route
            path="/product"
            exact
            element={
              <Private>
                <ModuleProduct />{" "}
              </Private>
            }
          />
          <Route
            path="/shopping"
            exact
            element={
              <Private>
                <ModuleShopping />
              </Private>
            }
          />
          <Route
            path="/user"
            exact
            element={
              <Private>
                <ModuleUser />
              </Private>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
