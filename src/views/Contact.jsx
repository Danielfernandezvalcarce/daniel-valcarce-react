import "./styles/ContactStyle.css";
import { ContactForm } from "../components/ContactUsForm";

export function Contact() {
  return (
    <>
      <main className="mx-auto col-12 col-md-10 offset-md-2">
        <section id="contact">
          <h2>Contact</h2>
          <p>
            If you would like to get in touch, please feel free to send me a message or contact me on LinkedIn.
          </p>

          <div className="contact-details">
            <div className="elementoContacto">
              <ContactForm></ContactForm>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;