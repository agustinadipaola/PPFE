import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // emailjs is imported to enable sending emails directly from the frontend.
import { FaHome, FaLinkedin, FaRegSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";


function ContactMe() {
 // useRef is used to get a reference to the form element.
   const form = useRef();
// sendEmail is the function that will be called when the form is submitted.
   const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submit action

// emailjs.sendForm sends the form data to the specified email service.
    emailjs
      .sendForm("service_qffp0kb", "template_w1qlx49", form.current, {
        publicKey: "rt64_uEUCfUhHXhNl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); //Reset the form fields after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Link className="right-link nav-link" to="/">
        <FaHome size={30} />
      </Link>
      <h1
        style={{
          fontFamily: "handwritting",
          textAlign: "center",
          fontSize: "80px",
        }}
      >
        contact me!
      </h1>
      <h6
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Feel free to reach out for collaborations or a friendly chat.
        <br/>
        Just drop
        me a message <FaRegSmileBeam /> or contact me on LinkedIn    <a
        href="https://uk.linkedin.com/in/agustina-di-paola"
      >
        <FaLinkedin size={30} />
      </a>
      </h6>
      <br />
      <div
        style={{
          backgroundSize: "cover",
        }}
      >
        <form
          style={{
            width: "50%",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <h6 style={{ fontFamily: "handwritting" }}>Name: </h6>
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Your name*"
          />
          <br />
          <h6 style={{ fontFamily: "handwritting" }}>Email: </h6>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Your email*"
          />
          <br />
          <h6 style={{ fontFamily: "handwritting" }}>Message: </h6>
          <textarea
            name="message"
            className="form-control"
            placeholder="Type your message here"
          />
          <br />
          <input
            type="submit"
            value="Send"
            style={{
              fontFamily: "handwritting",
              background: "transparent",
              border: "1px solid grey"
            }}
            
          />
          
    
        </form>
      
      </div>
   
    </div>
  );
}
export default ContactMe;
