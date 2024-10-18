import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalMouseEvent from "./components/GlobalMouseEvent/GlobalMouseEvent.tsx";
import TimerPage from "./components/TimerPage/TimerPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mouse",
    element: <GlobalMouseEvent />,
  },
  {
    path: "/timer",
    element: <TimerPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
