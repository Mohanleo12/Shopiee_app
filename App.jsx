import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./src/myShopiee/Header";

function App() {
  return (
    <div>
      {/* ------------ Shopiee ---------------*/}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
