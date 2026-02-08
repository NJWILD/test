import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the return policy?",
    answer:
      "Our goal is for every customer to be totally satisfied with their purchase. If this isn't the case, let us know and we'll do our best to work with you to make it right.",
  },
  {
    question: "Are any purchases final sale?",
    answer:
      "We are unable to accept returns on certain items. These will be carefully marked before purchase.",
  },
  {
    question: "When will I get my order?",
    answer:
      "We will work quickly to ship your order as soon as possible. Once your order has shipped, you will receive an email with further information. Delivery times vary depending on your location.",
  },
  {
    question: "Where are your products manufactured?",
    answer:
      "Our products are manufactured both locally and globally. We carefully select our manufacturing partners to ensure our products are high quality and a fair value.",
  },
  {
    question: "How much does shipping cost?",
    answer:
      "Shipping is calculated based on your location and the items in your order. You will always know the shipping price before you purchase.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white md:py-24 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Accent Line */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 transition-colors duration-300 ${
                    isOpen ? "bg-gray-400" : "bg-gray-700"
                  }`}
                />

                {/* Header (ONLY clickable area) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-black pr-6">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 text-gray-700 text-sm transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
