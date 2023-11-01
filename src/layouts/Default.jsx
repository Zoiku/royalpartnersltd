import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Default.Layout.css";

const Default = () => {
  return (
    <div className="default-layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;
