import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      // Replace this entire try/catch block with one of the Option 2 implementations
      try {
        // Option 2: EmailJS Implementation
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        };

        await emailjs.send(
          "service_y83ned1",
          "template_udwa3si",
          templateParams,
          "vfge4WyCTKXhseToH"
        );

        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitMessage("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 flex flex-col items-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-2">
          Get in Touch
        </h1>
        <p className="text-neutral-400 mb-10">
          Have a question or want to work together? Drop me a message!
        </p>

        {submitMessage && (
          <div
            className={`p-4 rounded mb-6 ${
              submitMessage.includes("success")
                ? "bg-green-900/30 text-green-400"
                : "bg-red-900/30 text-red-400"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-neutral-900 border ${
                  errors.name ? "border-red-500" : "border-neutral-700"
                } rounded p-3 text-neutral-200 focus:outline-none focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-neutral-900 border ${
                  errors.email ? "border-red-500" : "border-neutral-700"
                } rounded p-3 text-neutral-200 focus:outline-none focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-neutral-300 mb-2">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-700 rounded p-3 text-neutral-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-neutral-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-neutral-900 border ${
                errors.message ? "border-red-500" : "border-neutral-700"
              } rounded p-3 text-neutral-200 focus:outline-none focus:border-blue-500`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
