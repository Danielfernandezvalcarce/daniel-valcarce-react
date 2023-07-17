import "./styles/ContactStyle.css";

export function Contact() {
  return (
    <>
      <main className="mx-auto col-12 col-md-10 offset-md-2">
        <section id="contact">
          <h2>Contact</h2>
          <p>
            If you would like to get in touch, please feel free to send me an
            email or connect with me on LinkedIn.
          </p>

          <div className="contact-details">
            <div className="elementoContacto">
              <h3>Email</h3>
              <p>
                <a href="mailto:dvalcarce93@gmail.com">dvalcarce93@gmail.com</a>
              </p>
            </div>

            <div className="elementoContacto">
              <h3>LinkedIn</h3>
              <p>
                <a href="https://www.linkedin.com/in/daniel-f-valcarce/">
                  Daniel Valcarce
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
