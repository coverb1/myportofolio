import "./About.css";
import pass from "../assets/pass.png";
import Card from "../Cards/Card";
import  {Menu,X} from 'lucide-react'
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  const[showprojects,setshowprojects]=useState(false)
  return (
    <>
    <div className="about-container">
      <div className="about-dedcription">
        <h1>
          About <span>me </span>
        </h1>
        <p>
          My name is MUCYO Bruce. I'm a passionate <br /> Rwandan Graphic
          Designer and Web Developer
          <br /> with solid experience in both fields. I love
          <br /> creative ideas into visual stories and building <br />
          user-friendly websites that make a real impact.
        </p>
      </div>

      <div className="about-image-container">
        <img className="about-image" src={pass} alt="" />
      </div>
{/* Menu Icon */}
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

    <Card />
    </>
  );
};

export default About;
