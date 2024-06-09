import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index:true,
            element: <Home />
        },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
