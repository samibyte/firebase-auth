import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Root;
