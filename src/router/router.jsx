import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, PostList, UserList, Error } from "../pages";
import { Layout } from "../layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/user-list", element: <UserList /> },
      { path: "/post-list", element: <PostList /> },
    ],
  },
  { path: "/404", element: <Error /> },
  { path: "*", element: <Navigate to="/404" replace /> },
]);
