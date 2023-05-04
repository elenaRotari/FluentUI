import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../components/About.jsx";
import Cards from "../components/Cards.jsx";
import Contacts from "../components/Contacts.jsx";
import Main from "../components/Main.jsx";
import Mainright from "../components/Mainright.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Mainright />,
            children: [
              {
                path: "/about",
                element: <About />,
              },

              {
                path: "/cards",
                element: <Cards />,
              },

              {
                path: "/contacts",
                element: <Contacts />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
