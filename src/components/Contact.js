import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <h1 className="contact">Kontakt</h1>
      <form
        className="contact-form"
        action="https://formsubmit.co/edwardtuzimek@gmail.com"
        method="POST"
      >
        <div className="contact-details">
          <input
            type="hidden"
            name="_next"
            value="https://sea-apart.web.app/thankyou.html"
          />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="text" name="name" placeholder="Imie" required />
          <input type="text" name="email" placeholder="Email" required />
        </div>
        {/* <div className="contact-subject">
          <input type="text" name="subject" placeholder="Temat" />
        </div> */}
        <div>
          <textarea
            rows="5"
            cols="50"
            name="message"
            placeholder="Wiadomosc"
            required
          />
        </div>
        <div>
          <ul className="contact-confirm">
            <li>
              <input type="submit" value="Send Message" />
            </li>
            <li>
              <input type="reset" value="Clear Form" />
            </li>
          </ul>
        </div>
      </form>
    </>
  );
}

export default Contact;
