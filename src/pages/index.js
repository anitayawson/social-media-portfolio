import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Highlights from "../sections/Highlights";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Highlights />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
