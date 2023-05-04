import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const isAdmin = true;
  return (
    <div className="App">
      <NavBar />
      {isAdmin ? <Outlet /> : <h1>Please login</h1>}
    </div>
  );
}

export default App;
