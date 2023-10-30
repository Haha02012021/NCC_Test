import { useState } from "react";
import MenuItem from "../components/MenuItem";
import MENU from "../constants/Menu";
import "../styles/partials/Sidebar.scss";
import HamburgerIcon from "../components/HamburgerIcon";

export default function Sidebar({ className = "" }) {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className={`sidebar ${className} ${isOpen ? "sidebar--small" : ""}`}>
        <ul className="sidebar__menu">
          {MENU.map((menuItem) => {
            return (
              <MenuItem
                key={menuItem.label}
                label={menuItem.label}
                href={menuItem.href}
              />
            );
          })}
        </ul>
      </nav>
      <div className={`menu-icon ${isOpen ? "menu-icon--white" : ""}`}>
        <HamburgerIcon onClick={handleOpen} open={isOpen} />
      </div>
    </>
  );
}
