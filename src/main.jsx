import { createRoot } from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
