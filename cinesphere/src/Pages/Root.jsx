import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;