import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
const Upnavbars = () => {
  const [showdropdown, setshowdropdown] = useState(false);
  const toggledropdown = () => {
    setshowdropdown(!showdropdown);
  };

  return (
    <div>
      <div className="container">
        <nav className="nav-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>

          <div
            className="project-container"
            onMouseEnter={() => setshowdropdown(true)}
            onMouseLeave={() => setshowdropdown(false)}
          >
            <Link className="project-link">Project▾</Link>
            {showdropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="graphic"
                    className="list-dropdown"
                    onClick={() => setshowdropdown(false)}
                  >
                    Graphic|Designer
                  </Link>
                </li>
                <li>
                  <Link
                    to="web"
                    className="list-dropdown"
                    onClick={() => setshowdropdown(false)}
                  >
                    Websites
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="logo-container">
            <Link onClick={toggledropdown} className="logo">
              MUCYO Bruce.
            </Link>
          </div>

          <div className="contact-container">
            <Link to="/contact" className="contact-link">
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Upnavbars;
