import React, {useState} from "react";
import { APP_FEATURES } from "../utils/data";
import { motion } from "framer-motion";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    setOpenAuthModal(true);
  };
  return (
    <>
      <div className=" min-h-screen bg-[#fffaf3] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0 z-50" onClick={() => setOpenAuthModal(true)}>
        <h1 className="text-lg font-bold">Interview Prep AI</h1>
        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:opacity-90 text-white rounded-full px-5 py-2 transition">
          Login / Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-20 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4"
        >
          ⚡ AI Powered
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold leading-tight mb-6"
        >
          Ace Interviews with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Learning
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Get role-specific questions, expand answers when you need them, dive
          deeper into concepts, and organize everything your way. From
          preparation to mastery — your ultimate interview toolkit is here.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 text-lg shadow-lg transition"
        >
          Get Started
        </motion.button>

        {/* Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 shadow-xl rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-2xl transition"
        >
          <div className="p-4 border-b flex justify-between text-sm text-gray-600 bg-gray-50">
            <span>Interview Prep AI</span>
            <span className="text-gray-400">
              https://timetoprogram.com/interview-prep
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 p-6 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-sm text-gray-500 mb-4">
                React.js, DOM manipulation, CSS Flexbox
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Experience: 2 Years
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">IQ Q&A</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Last Updated: 30th Apr 2025
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded-md">
                  Q: What is JSX? Explain its role in React.
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  Q: Explain the concept of event handling in React.
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                  Q: How do you handle DOM manipulation in React?
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">
                CSS Flexbox: A Beginner’s Guide
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                CSS Flexbox is a powerful layout model that makes it easier to
                design responsive layouts without floats or positioning.
              </p>
              <p className="text-sm text-gray-600 mb-2 font-semibold">
                Basic Concepts:
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>
                  <span className="font-semibold">Flex Container:</span> use{" "}
                  <code>display: flex;</code>
                </li>
                <li>
                  <span className="font-semibold">flex-direction:</span> row,
                  row-reverse, column, column-reverse
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 px-8 bg-[#fffaf3]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features That Make You Shine
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {APP_FEATURES.slice(0, 6).map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.id * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        Made with ❤️ … Happy Coding
      </footer>
    </div>

    <Modal 
      isOpen={openAuthModal}
      onClose={() => {
        setOpenAuthModal(false);
        setCurrentPage("login");
      }}
      hideheader
    >
      <div>
        {currentPage === "login" && (
          <Login setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "signup" && (
          <SignUp setCurrentPage={setCurrentPage} />
        )}
      </div>
    </Modal>
    </>
  );
}

export default LandingPage;