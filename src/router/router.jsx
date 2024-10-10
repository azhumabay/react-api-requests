import { createBrowserRouter, Navigate } from "react-router-dom";
import { PostList, UserList, Error, UserPostList, Post } from "../pages";
import { Layout } from "../layout";
import { APP_PATH } from "../const/router";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={APP_PATH.USER_LIST} replace /> },
      { path: APP_PATH.USER_LIST, element: <UserList /> },
      { path: APP_PATH.POST_LIST, element: <PostList /> },
      { path: `${APP_PATH.USER_LIST}/:userId`, element: <UserPostList /> },
      { path: `${APP_PATH.POST_LIST}/:postId`, element: <Post /> },
    ],
  },
  { path: APP_PATH.ERROR, element: <Error /> },
  { path: "*", element: <Navigate to={APP_PATH.ERROR} replace /> },
  { path: "*", element: <Error /> },
]);
