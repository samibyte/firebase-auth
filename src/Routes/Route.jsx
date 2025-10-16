import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
