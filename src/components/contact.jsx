import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';


const Contact = () => {
  const form = useRef();
  const [showModal,setShowModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_69k19lm', 'template_c7dsmof', form.current, {
        publicKey: 'JTHaZbta9WJ8qBSwE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };  
  
    return (    
      <div className="card col-md-5 mx-auto shadow-sm mb-2 mt-3"> 
      <div className="p-4">  
        <form ref={form} onSubmit={sendEmail}>       
            <div className="mb-3">
              <input className="form-control"
                type="text"
                name="from_name"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input className="form-control"
                type="email"
                name="from_email" 
                placeholder="email"
              />
            </div>
           <textarea name='message' className="form-control" placeholder="Message"></textarea>
           <div className="mt-3">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form> 
        
        {showModal && (
          <div className="card bg-success d-block mt-3" tabIndex={-1}>
            <div className="card-body text-white">
            "I have received your inquiry, I will get back to you as soon as possible.<br/> Thank you!"
            </div>
          </div>   
                 
          )}
      </div> 
      </div>    
    );
  };


export default Contact;