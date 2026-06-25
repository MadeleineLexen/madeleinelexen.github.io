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

const redirectPath = new URLSearchParams(window.location.search).get("redirect");

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/pausepal", element: <PausePal /> },
      { path: "projects/masterthesis", element: <MasterThesisNew /> },
      { path: "projects/automatic-overbooking", element: <Overbooking /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);