import "./Card.css";
import csslogo from "../assets/csslogo.png";
import htmllogo from "../assets/htmllogo.png";
import javalogo from "../assets/javalogo.png";
import reactlogo from "../assets/reactlogo.png";
import photoshoplogo from "../assets/photoshoplogo.png";
import illustratorlogo from "../assets/illustratorlogo.png";
import cvicon from "../assets/cvicon.png";
import resume from "../assets/resume.pdf";
const Card = () => {

  const skillsDetails = [
    {
      id:1,
      title: "Css Skills",
      image: csslogo,
      desc: "I have skills in Css",
    },
    {
      id:2,
      title: "Html Skills",
      image: htmllogo,
      desc: "I have skills in Html",
    },
    {
      id:3,
      title: "Java Skills",
      image: javalogo,
      desc: "I have skills in Java",
    },
    {
      id:4,
      title: "React Skills",
      image: reactlogo,
      desc: "I have skills in React",
    },
    {
      id:5,
      title: "Photoshop Skills",
      image: photoshoplogo,
      desc: "I have skills in Photoshop",
    },
    {
      id:6,
      title: "Illustrator Skills",
      image: illustratorlogo,
      desc: "I have skills in Illustrator",
    },
    {
      id:7,
      title:"express.js",
    }
  ]
  return (
    <div className="container">
      <div className="card-head">
        <h1>Skills I Have</h1>
      </div>
      <div className="card-container">
        {skillsDetails.map((card)=>
          <div 
          key={card.id}
          className="card"
          >
           <img src={card.image} alt="" />
           <h1>{card.title}</h1> 
           <p>{card.desc}</p>
          </div>
        )}
      </div>

      <div className="button">
      <button className="download-btn">
            <img src={cvicon} alt="Cv" className="cv-icon"/>
            <a href={resume}>Download CV</a>
      </button>
      </div>
    </div>
  );
};

export default Card;
