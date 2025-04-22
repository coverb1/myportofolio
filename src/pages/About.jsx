import "./About.css";
import pass from "../assets/pass.png";
import Card from "../Cards/Card";
import  {Menu} from 'lucide-react'

const About = () => {
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

      <div className="menu">
        <Menu size={30} /> 
      </div>
    </div>
    <Card />
    </>
  );
};

export default About;
