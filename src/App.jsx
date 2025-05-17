import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects1 from "./components/Projects1";

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-center bg-fixed"></div>

      <div className="relative z-10 select-none">
        <Navbar />
        <Hero />
        <Projects1 />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
