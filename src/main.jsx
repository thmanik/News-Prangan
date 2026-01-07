import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./Error";

import Root from "./root";
import Home from "./pages/Home";
import NewsDetailsPage from "./pages/NewsDetails";
import CategoryPage from "./pages/Category";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/newsDetails/:id",
        element: <NewsDetailsPage />
      },
      {
        path: "/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/:categoryName/:subCategoryName",
        element: <CategoryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
