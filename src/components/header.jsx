import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center mb-3">
      <Link className="navbar-brand" to="/home">
        <img
          className="rounded-circle"
          src={logo}
          alt="Cupcake logo"
          style={{ width: "80px" }}
        />
      </Link>
      <ul className="navbar-nav" style={{ fontSize: "2rem", color: "red" }}>
        <li className="nav-item nav-link">
          <a className="nav-link" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item nav-link">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item nav-link">
          <a className="nav-link" href="/products">
            Products
          </a>
        </li>
        <li className="nav-item nav-link">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
