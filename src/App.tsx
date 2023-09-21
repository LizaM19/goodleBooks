import { Outlet } from "react-router-dom";
import "./App.css";
import Routing from "./assets/routing/Routing";

function App() {
  return (
    <>
      <Outlet />
      <Routing />
    </>
  );
}

export default App;
