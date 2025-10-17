import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import Signin from "../Pages/SignIn";

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
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/sign-in",
        Component: Signin,
      },
    ],
  },
]);

export default router;
