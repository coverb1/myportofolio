import { Link } from "react-router-dom";
import "../index.css";
import pass from "../assets/pass.png";
import bag from "../assets/bag.png";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
