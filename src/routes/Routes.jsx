import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../errorPage";
import { Projects } from "../pages/Projects";
import Contact from "../pages/Contact";
import { About } from "../pages/About";
import HomePage from "../pages/HomePage";
import App from "../App";
import MasterThesis from "../pages/MasterThesis"; 
import PausePal from "../pages/PausePal";

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
        path: "/projects",
        element: <Projects />,
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
      },{
        path: "/masterthesis",
        element: <MasterThesis />,
        errorElement: <ErrorPage />,
      },{
        path: "/project3",
        element: <MasterThesis />,
        errorElement: <ErrorPage />,
      },{
        path: "/project4",
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
