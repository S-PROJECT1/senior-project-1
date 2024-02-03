// ContactUs.js

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactUs.css'; // Make sure to import the CSS file

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('person@gmail.com', 'template_fl4e7v8 ', form.current, '2bsqtIq6pcWvij2Qo')
      .then((result) => {
        console.log(result.text);
        document.getElementById('success-alert').classList.add('show');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      <div id="success-alert" className="alert">
        Your message was sent successfully!
      </div>
    </div>
  );
};
