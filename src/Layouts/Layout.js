import { Outlet } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import "../styles/layouts/Layout.scss";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="layout__page">
          <Outlet />
          <footer className="footer">
            <span className="footer__text">Copyright © 2021</span>
          </footer>
        </div>
      </div>
    </>
  );
}
