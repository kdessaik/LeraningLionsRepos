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
})


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

