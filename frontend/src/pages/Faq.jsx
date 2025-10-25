import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaAngleUp } from "react-icons/fa6";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is MatchNest?",
      answer:
        "MatchNest is a dating platform designed to foster meaningful connections, from casual friendships to lifelong partnerships. We prioritize safety, authenticity, and inclusivity to help you find your perfect match.",
    },
    {
      question: "How do I create an account?",
      answer:
        'Simply click the "Get Started" button on our homepage or the signup link, fill in your details, and follow the prompts to set up your profile. It’s quick, easy, and free to join!',
    },
    {
      question: "Is MatchNest safe to use?",
      answer:
        "Absolutely! We use advanced security measures to protect your data and ensure a safe environment. Our moderation team also reviews profiles to maintain authenticity and respectfulness.",
    },
    {
      question: "Can I use MatchNest for free?",
      answer:
        "Yes, MatchNest offers a free plan with access to core features. We also offer premium subscriptions for enhanced features, which you can explore in your account settings.",
    },
    {
      question: "How does MatchNest match users?",
      answer:
        "Our platform uses a combination of user preferences, interests, and advanced algorithms to suggest compatible matches, ensuring you connect with people who share your values and goals.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="mt-[69px] h-[48vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-b-[50px] shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-michroma text-white drop-shadow-lg">
          Frequently Asked <span className="font-rocksalt">Questions</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-white font-medium drop-shadow-sm leading-relaxed">
          Got questions about MatchNest? Explore our FAQs to learn more about how we help you find meaningful connections.
        </p>
      </section>

      {/* FAQ Cards */}
      <section className="py-20 px-6 flex flex-col items-center gap-8 bg-gradient-to-b from-white to-pink-50">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`w-full max-w-3xl bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-md ${
              openIndex === index ? "border-pink-300 shadow-lg" : "border-pink-100"
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-6 cursor-pointer focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-pink-700">{faq.question}</h3>
              <FaAngleUp
                className={`text-pink-500 text-xl md:text-2xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`px-6 transition-all duration-500 ${
                openIndex === index ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-pink-50 to-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 font-michroma">
          Still Have Questions?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg md:text-xl font-medium leading-relaxed">
          Reach out to our support team or join MatchNest today to start your journey to meaningful connections!
        </p>
        <a
          href="/signup"
          className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:from-red-600 hover:to-pink-700"
        >
          Get Started
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;
