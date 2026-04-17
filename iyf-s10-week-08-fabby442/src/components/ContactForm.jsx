import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact Us</h3>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;