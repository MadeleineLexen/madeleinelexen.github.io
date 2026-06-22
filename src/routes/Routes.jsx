import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../errorPage";
import Contact from "../pages/Contact";
import { About } from "../pages/About";
import HomePage from "../pages/HomePage";
import App from "../App";
import MasterThesis from "../pages/MasterThesis.tsx";
import PausePal from "../pages/PausePal";
import Overbooking from "../pages/Overbooking.jsx";
import MasterThesisNew from "../pages/MasterThesisNew.tsx";

export const router = createBrowserRouter([
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
        path: "/projects/pausepal",
        element: <PausePal />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/masterthesis",
        element: <MasterThesisNew />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/automatic-overbooking",
        element: <Overbooking />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
