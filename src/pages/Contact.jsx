import { Menu, X } from "lucide-react";
import "./Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const Contact = () => {

const [name,setname] = useState("")
const [email,setemail]= useState("")
const [message,setmessage]=useState("")
const [submitted,setsubmitted]=useState("")

  const handlesubmit = (e) =>{
   e.preventDefault();

if (!email.includes("@")) {
  alert("Please write a correct email")
  return  //We use **return** here to stop the function from continuing after showing the alert.
}

const API_URL = import.meta.env.VITE_API_URL;

axios.post(`${API_URL}`,{
  name,email,message
})
setsubmitted(true)
setname("")
setemail("")
setmessage("")
}
  const[menuOpen,setMenuOpen]=useState(false)
  const[showprojects,setshowprojects]=useState(false)
  return (
    <form onSubmit={handlesubmit}>
    <div className="contact-page">
      <div className="head-container">
        <h1 className="contactpage-title">Contact me</h1>
        <span>
          Please fill out the form below to discuss any work opportunity
        </span>
      </div>
      <div className="form-container">
        <input type="text" className="Name" placeholder="Your name"  required value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" className="Email" placeholder="Your email"  required value={email} onChange={(e)=>setemail(e.target.value)}/>
        <textarea
          className="message"
          name="message"
          rows="5"
          placeholder="Your message"
          required
          value={message}
          onChange={(e)=>setmessage(e.target.value)}
        ></textarea>
        <button className="submit-button" value="send">
          Submit
        </button>
            {submitted && (
            <p className="thank-you-message">
             We appreciate you reaching out to us. 
            </p>
          )}
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
    </form>
  );
};

export default Contact;
