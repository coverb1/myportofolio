import { Link } from "react-router-dom";
import "../index.css";
import pass from "../assets/pass.png";
import bag from "../assets/bag.png";
import { useState } from "react";
import { Menu,X } from "lucide-react";

const Home = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  const[showprojects,setshowprojects]=useState(false)
  return (
    <div className="home-container">
      <div className="container">
        <div className="image-container">
          <img src={pass} alt="" />
        </div>
      </div>

      <div className="label-container">
        <span className="hello">Hello</span>
        <span className="intro-text">
          I'm <span className="intro-name">BRUCE</span>
        </span>
        <p className="paragraph">Am graphic designer & Webdesigner</p>
        <p className="second-paragraph">
          I am a skilled and passionate graphic designer and web developer with
          several years of experience in creating eye-catching graphic designs
          and standout websites.
        </p>
        <Link className="bag-link">
          <img src={bag} alt="" />
          Hire me
        </Link>
      </div>
      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <Menu size={30} /> 
      </div>
      {menuOpen &&(
          <div className="mobile-nav">
            <div className="close-icon" onClick={()=>setMenuOpen(false)}>
              <X size={20}/>
            </div>
<Link to="/" className="link-responsive" onClick={()=>setMenuOpen(false)}>Home</Link>
<Link to="/about" className="link-responsive" onClick={()=>setMenuOpen(false)}>About</Link>
<div className="dropdown-link-project" onClick={()=>setshowprojects(!showprojects)
}>
  Projects ▾
</div>
{showprojects&&(
  <div className="dropdown-items-projects">
<ul>
  <li>
    <Link to="graphic" className="item-projects" onClick={()=>setshowprojects(false)}>
  Graphic|Designer
  </Link>
  </li>
  <Link to="web" className="item-projects" onClick={()=>setshowprojects(false)}>
  Websites
  </Link>
  <li>

</li>
</ul>
</div>
)}
<Link to="/contact" className="link-responsive" onClick={()=>setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
