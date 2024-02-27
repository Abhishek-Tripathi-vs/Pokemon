import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Dynamic from "./Dynamic.js";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "dynamic/:id",
    element: <Dynamic />,
  },
]);

export default AppRoutes;
