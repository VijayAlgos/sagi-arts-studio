import "../styles/contact.css";

import insta from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import facebook from "../assets/icons/fbLogo.png";
import whatsapp from "../assets/icons/whatsapp.png";
import call from "../assets/icons/call.png";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt
} from "react-icons/fa";


function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-card">

        {/* Left Column */}
        <div className="contact-form">

          <form
            action="https://formsubmit.co/sagimandalarts@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter your name")}
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter your email")}
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              onInvalid={(e) => e.target.setCustomValidity("Please enter your message")}
              onInput={(e) => e.target.setCustomValidity("")}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>

        {/* Right Column */}
        <div className="contact-right">

          <h2>Connect With Us</h2>

          <div className="contact-social">

            <a href="https://instagram.com/sagimandalaarts_global">
              <img src={insta} alt="Instagram" />
            </a>

            <a href="https://www.facebook.com/people/Sagi-Arts/pfbid02nABX1PK8KjabCYv4wYcSaAvgjzbDdMVDVpvrT7iApX3VtJr1VNoLtnsNLLy3JZndl/">
              <img src={facebook} alt="Facebook" />
            </a>

            <a href="https://wa.me/918939064525">
              <img src={whatsapp} alt="WhatsApp" />
            </a>

            <a href="tel:+917708233307">
              <img src={call} alt="Call" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;                                                                         