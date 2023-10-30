import { NavLink } from "react-router-dom";
import "../styles/components/MenuItem.scss";

export default function MenuItem({ label, href }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
      `menu-item ${isPending ? "pending" : isActive ? "menu-item--active" : ""}`
    }
      to={href}
    >
      <li className="menu-item__label">{label}</li>
    </NavLink>
  );
}
