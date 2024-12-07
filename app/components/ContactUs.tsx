// components/ContactUs.tsx
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        setFormData({ name: "", email: "", companyName: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Lets build something <br /> <span className="text-blue-400">great together.</span></h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-blue-400">hello@fortnight.studio</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Dribbble</h3>
            <p className="text-blue-400">@fortnight</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Web Location</h3>
            <p className="text-blue-400">fortnight.studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
