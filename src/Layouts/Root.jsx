import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Root;
