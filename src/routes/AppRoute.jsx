import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { Layout } from "@/layouts";
import { Page } from "@/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Page />,
      },
    ],
  },
]);


const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
