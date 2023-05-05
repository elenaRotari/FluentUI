import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const isAdmin = true;
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
