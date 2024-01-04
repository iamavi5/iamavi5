import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section name="contactSection" className="contactSection">
      <p>
        <b>
          Feel free to reach out to me using the contact form below or through
          the provided contact details.
        </b>
      </p>
      <div className="formContainer">
        <div className="graphicsContainer" >
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTlqam1hNjc3ZXNlZ3M1YjE1anV4d21wdmNhZTM3d243bGh4eGN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6aFo4ylmAaJ6pEFash/giphy.gif" alt="Mails GIF" />
        </div>
        <div className="contactFormContainer">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
