import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="feed"
      className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Helping Brands <span className="text-socialPink">Stand Out</span> Online
      </motion.h1>
      <p className="text-lg max-w-xl mb-6">
        I strategize, create, and grow digital campaigns that convert — with
        style ✨
      </p>
      <a
        href="#portfolio"
        className="bg-socialBlue text-white px-6 py-3 rounded-full hover:bg-socialPink transition"
      >
        View My Work
      </a>
    </section>
  );
}
