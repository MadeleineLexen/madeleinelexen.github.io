import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page page-transition">
      <div className="contact-container">
        <h1>Let's Connect</h1>
        <p className="contact-intro">
          I'm currently exploring product-focused UX roles, particularly in data-driven or consumer-facing products. 
          If you have an interesting opportunity or just want have a conversation, I'd love to hear from you.
        </p>
        
        <div className="contact-details">
          <a href="mailto:madeleine.lexen@gmail.com">madeleine.lexen@gmail.com</a>
          <span className="contact-separator">•</span>
          <a href="https://www.linkedin.com/in/madeleinelexen" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="contact-separator">•</span>
          <span>Gothenburg</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
