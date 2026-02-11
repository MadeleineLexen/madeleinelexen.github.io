import { createHashRouter } from "react-router-dom";
import { ErrorPage } from "../errorPage";
import Contact from "../pages/Contact";
import { About } from "../pages/About";
import HomePage from "../pages/HomePage";
import App from "../App";
import MasterThesis from "../pages/MasterThesis.tsx"; 
import PausePal from "../pages/PausePal";

export const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pausepal",
        element: <PausePal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/masterthesis",
        element: <MasterThesis />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
