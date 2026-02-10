import { useState } from "react";
import "../styles/Contact.css";
import { validateContactForm } from "../utils/contactValidation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully! (Dummy)");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span>{errors.message}</span>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
