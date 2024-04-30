import {React,useEffect} from 'react'
import '../style/css/Contact.css'
import ContactImg from '../style/images/backgroundImages/contactbckImg.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Contact() {
  

const Submit_form=(e)=>{
  const formElements=document.getElementById('form')
e.preventDefault()
const formData=new FormData(formElements)
fetch('https://script.google.com/macros/s/AKfycbz_uHB-5WOPI3yYOA3L3yT6xIz1xtCkGu5bz87cAtWqA1jkClD4wG4ZW0kucf9jHBohCA/exec',{
  method:"POST",
  body:formData
}).then((res)=>{
  res.json()

}).then((data)=>{
  console.log(data)
}).catch(
  (error)=>{
    console.log(error)
  }

)


}

    useEffect(()=>{
        document.title="Contact - Learning Lions"
      },[])
      
  return (
    <section>
      <section className='container contactSection' >
    <div className='backgroundContact'>
      <img src={ContactImg} className='bckImgContact' alt='loading...'/>
      
      <h2 className='pacifico-regular'>contact us</h2>
      <sectione/>

    </div>
  </section>
  <section className='localisation'>
    <div>
      <h1 className='pacifico-regular'>
      where <br></br> can you find us?

      </h1>
      <div>
        <p>INFO@LEARNINGLIONS.ORG</p>
      <p>KENYA – P.O. BOX 344 – 30500 LODWAR</p>
      <p>GERMANY – SCHLOSSSTRASSE 8, 82269 GELTENDORF</p>
      </div>
      
    </div>
  <div style={{ height: '60vh', width: '50%' }}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31853.103407761184!2d35.78020786333408!3d3.6696312217494857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x179ea2221c8c3695%3A0x5c89462681105d89!2sStartup%20Lions%20ICT%20Campus!5e0!3m2!1sfr!2ske!4v1714453236149!5m2!1sfr!2ske" 
  style={{ height: '115%', width: '100%' }}
  >
  

  </iframe>
      
    </div>
  </section>

  <Form className='form' id='form' onSubmit={(e)=>Submit_form(e)}>

  <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="text" name='FirstName' placeholder="FIRST-NAME" />
        <Form.Control type="text" name='SecondName' placeholder="SECOND-NAME" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" name='Email' placeholder="EMAIL" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" name='Messange' placeholder="MESSANGE" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </section>
    
  )
}

