import React, { useRef } from 'react';
import './contact.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // const serviceId =process.env.SERVICE_ID;
    // const templateKey =process.env.TEMPLATE_KEY;

    emailjs.sendForm("service_fim528n", "template_jyjzhis", form.current, '6QQ6Q2TdocL0KD8zJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <EmailOutlinedIcon className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vishalgangwar094@gmail.com</h5>
            <a href='mailto:vishalgangwar094@gamil.com' target='_blank' rel="noreferrer">Send Email Here</a>
          </article>
          <article className='contact_option'>
            <MessageOutlinedIcon className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Vishal Gangwar</h5>    
            <a href='https://m.me/ernest.achiever' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact_option'>
            <WhatsAppIcon className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8840216454</h5>
            <a href='https://api.whatsapp.com/send?phone=+918840216454' target='_blank' rel="noreferrer">Chat on WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter your name here' required />
          <input type='email' name='email' placeholder='Enter your email here' required />
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>
    </section>
  );
}

export default Contact;
