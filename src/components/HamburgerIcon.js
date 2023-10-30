import "../styles/components/HamburgerIcon.scss";

export default function HamburgerIcon({ onClick, open }) {
  return (
    <button className="hamgurger-icon" onClick={onClick}>
      <span
        className={`hamgurger-icon__line ${
          open ? "hamgurger-icon__line--open" : "hamgurger-icon__line--close"
        }`}
      ></span>
      <span
        className={`hamgurger-icon__line ${
          open ? "hamgurger-icon__line--open" : "hamgurger-icon__line--close"
        }`}
      ></span>
      <span
        className={`hamgurger-icon__line ${
          open ? "hamgurger-icon__line--open" : "hamgurger-icon__line--close"
        }`}
      ></span>
    </button>
  );
}
