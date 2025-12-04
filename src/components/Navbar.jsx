// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            Micro-Gardens
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/guides">Guides</NavLink>
            </li>
            <li>
              <NavLink to="/research">Research</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/gospel">Gospel</NavLink>
            </li>
          </ul>

          {/* Mobile toggle button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="nav-toggle"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="mobile-nav" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="nav-panel">
            <nav>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/guides" onClick={() => setOpen(false)}>
                Guides
              </Link>
              <Link to="/research" onClick={() => setOpen(false)}>
                Research
              </Link>
              <Link to="/resources" onClick={() => setOpen(false)}>
                Resources
              </Link>
              <Link to="/gospel" onClick={() => setOpen(false)}>
                Gospel
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
