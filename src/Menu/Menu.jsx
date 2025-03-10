import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Servicios">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
