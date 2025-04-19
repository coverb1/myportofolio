import './Card.css'
import  csslogo from '../assets/csslogo.png'
import htmllogo from '../assets/htmllogo.png'
import javalogo from '../assets/javalogo.png'
import reactlogo from '../assets/reactlogo.png'
import photoshoplogo from '../assets/photoshoplogo.png'
import illustratorlogo from '../assets/illustratorlogo.png'
import cvicon from '../assets/cvicon.png'
import resume from '../assets/resume.pdf'
const Card = () => {
  return (
    <div>
      <div className='card-head'>
<h1>Skills I Have</h1>
      </div>
      <div className='card-container'>
      <div className='card'>
<img src={csslogo} alt="" />
<h1>Css skills</h1>
<p>I have skills in Css</p>
      </div>

      <div className='card'>
<img src={htmllogo} alt="" />
<h1>Html skills</h1>
<p>I have skills in Html</p>
      </div>

      <div className='card'>
<img src={reactlogo} alt="" />
<h1>React skills</h1>
<p>I have skills in React</p>
      </div>

      <div className='card'>
<img src={javalogo} alt="" />
<h1>Javascript skills</h1>
<p>I have skills in Javascript</p>
      </div>

      <div className='card'>
<img src={photoshoplogo} alt="" />
<h1>Photoshop skills</h1>
<p>I have skills in Photoshop</p>
      </div>

      <div className='card'>
<img src={illustratorlogo} alt="" />
<h1>illustrator skills</h1>
<p>I have skills on Illustrator</p>
      </div>

    </div>
<a href={resume} download>
    <div className='cv-button'>
  <button className="download-btn" >
      <img src={cvicon} alt="CV Icon" className="cv-icon" />
    Download CV
  </button>
</div>
</a>
    </div>
  )
}

export default Card
