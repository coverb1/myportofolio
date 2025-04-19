import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='head-container'>
<h1 className='contactpage-title'>Contact me</h1>
<span>Please fill out the form belowto discuss any work opportunity</span>
      </div>
      <div className='form-container'>
        <input type="text"  className='Name' placeholder='Your name'/>
        <input type="text" className='Email' placeholder='Your email' />
        <textarea className='message' name="message" rows="5" placeholder='Your message' ></textarea>
        <button className='submit-button' value='send'>Submit</button>
      </div>
    </div>
  )
}

export default Contact
