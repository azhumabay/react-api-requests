import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, PostList, UserList, Error, UserPostList } from "../pages";
import { Layout } from "../layout";
import { APP_PATH } from "../const/router";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: APP_PATH.MAIN, element: <Navigate to={APP_PATH.HOME} replace /> },
      { path: APP_PATH.USER_LIST, element: <UserList /> },
      { path: APP_PATH.POST_LIST, element: <PostList /> },
      { path: `${APP_PATH.USER}/:id`, element: <UserPostList /> },
    ],
  },
  // { path: APP_PATH.ERROR, element: <Error /> },
  // { path: "*", element: <Navigate to={APP_PATH.ERROR} replace /> },
  { path: "*", element: <Error /> },
]);
