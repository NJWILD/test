import { useState } from "react";
import Navbar from "../components/navbar";
import FAQSection from "../components/FAQSection";
import TrustBar from "../components/trustBar";
import Footer from "../components/footer";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Apex Brand

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Message:
${message}`;

    const phoneNumber = "2348056364802";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp link
    window.open(whatsappURL, "_blank");

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar theme="light" />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* LEFT IMAGE */}
          <div className="hidden lg:block">
            <img
              src="https://plus.unsplash.com/premium_photo-1661679395649-5eb2372e5769?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact Apex"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-10">
              Have a question, collaboration idea, or feedback? We’d love to
              hear from you.
            </p>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 bg-black text-white py-4 rounded-xl font-semibold tracking-wide hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <FAQSection />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default Contact;
