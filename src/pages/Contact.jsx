import { Menu, X } from "lucide-react";
import "./Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  const[showprojects,setshowprojects]=useState(false)
  return (
    <div className="contact-page">
      <div className="head-container">
        <h1 className="contactpage-title">Contact me</h1>
        <span>
          Please fill out the form belowto discuss any work opportunity
        </span>
      </div>
      <div className="form-container">
        <input type="text" className="Name" placeholder="Your name" />
        <input type="text" className="Email" placeholder="Your email" />
        <textarea
          className="message"
          name="message"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button className="submit-button" value="send">
          Submit
        </button>
      </div>
      {/* Menu Icon */}
      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <Menu size={30} /> 

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
    </div>
  );
};

export default Contact;
