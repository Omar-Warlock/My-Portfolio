"use client";

import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // Navigation items array
  const navItems = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact Me", path: "#contact" },
  ];
  

  return (
    <nav className="navbar navbar-expand-lg custom-navbar border-bottom ">
      <div className="container-fluid py-3 px-5">
        <a className="navbar-brand custom-nav-link fs-1" href="/">
          O-W
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item mx-2" key={index}>
                <a className="nav-link custom-nav-link" href={item.path}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
