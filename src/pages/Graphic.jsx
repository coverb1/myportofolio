import "./Graphic.css";
import graphic1 from "../assets/graphic1.jpg";
import graphic2 from "../assets/graphic2.jpg";
import graphic3 from "../assets/graphic3.jpg";
import graphic4 from "../assets/graphic4.jpg";
import graphic5 from "../assets/graphic5.jpg";
import upworklogo from "../assets/upworklogo.png";
import tiktoklogo from "../assets/tiktoklogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import instagramlogo from "../assets/instagramlogo.png";
import fiverrlogo from "../assets/fiverrlogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Graphic = () => {
  const [showplatforms, setshowplatforms] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [showprojects, setshowprojects] = useState(false)
  return (
    <div>
      <div className="graphic-card-container">
        <div className="cards">
          <img src={graphic1} alt="" />
          <h1>Mucyo bruce</h1>
          <p>Music Flayer</p>
          <button>On instagram</button>
        </div>

        <div className="cards">
          <img src={graphic2} alt="" />
          <h1>Advertising Flayer</h1>
          <p>Book and get Discount%</p>
          <button>On instagram</button>
        </div>

        <div className="cards">
          <img src={graphic3} alt="" />
          <h1>Saloon Flayer</h1>
          <p>Book and get Discount%</p>
          <button>On instagram</button>
        </div>

        <div className="cards">
          <img src={graphic4} alt="" />
          <h1>Advertising Flayer</h1>
          <p>Book and get Discount%</p>
          <button>On instagram</button>
        </div>

        <div className="cards">
          <img src={graphic5} alt="" />
          <h1>Renting Flayer</h1>
          <p>Book and get Discount%</p>
          <button>On instagram</button>
        </div>

        <div className="cards">
          <img src='../assets/Graphic6.jpg' alt="" />
          <h1>Birthday Flayer</h1>
          <p>Book and get Discount%</p>
          <button>On instagram</button>
        </div>
        <div
          className="visit-instagram-paragraph"
          onMouseEnter={() => setshowplatforms(true)}
          onMouseLeave={() => setshowplatforms(false)}
        >
          <p>Many projects visit my platforms</p>

          {showplatforms && (
            <ul className="platform-container">
              <li>
                <a href="https://www.upwork.com/freelancers/~017993c249ae77b5b0?mp_source=share">
                  Upwork
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/coverboy003">Fiverr</a>
              </li>
              <li>
                <a href="https://www.instagram.com/mbgraphicx.__">Instagram</a>
              </li>
              <li>
                <a href="linkedin.com/in/mucyo-bruce-4175a535b">LinkedIn</a>
              </li>
            </ul>
          )}
        </div>

        <div className="platforms-image">
          <div className="each-image">
            <img src={upworklogo} alt="" />
          </div>
          <div className="each-image">
            <img src={tiktoklogo} alt="" />
          </div>

          <div className="each-image">
            <img src={linkedinlogo} alt="" />
          </div>

          <div className="each-image">
            <img src={instagramlogo} alt="" />
          </div>

          <div className="each-image">
            <img src={fiverrlogo} alt="" />
          </div>
        </div>
      </div>
      {/* Menu Icon */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={30} />

        {menuOpen && (
          <div className="mobile-nav">
            <div className="close-icon" onClick={() => setMenuOpen(false)}>
              <X size={20} />
            </div>
            <Link to="/" className="link-responsive" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="link-responsive" onClick={() => setMenuOpen(false)}>About</Link>
            <div className="dropdown-link-project" onClick={() => setshowprojects(!showprojects)
            }>
              Projects ▾
            </div>
            {showprojects && (
              <div className="dropdown-items-projects">
                <ul>
                  <li>
                    <Link to="graphic" className="item-projects" onClick={() => setshowprojects(false)}>
                      Graphic|Designer
                    </Link>
                  </li>
                  <Link to="web" className="item-projects" onClick={() => setshowprojects(false)}>
                    Websites
                  </Link>
                  <li>
                  </li>
                </ul>
              </div>
            )}
            <Link to="/contact" className="link-responsive" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Graphic;
