import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'; // <-- make sure to import your CSS

export default function App() {
  return (
    <div className="app-background">
      <Navbar />
      <main className="container py-5">
        <section className="mb-5">
          <Hero />
        </section>
        <section className="mb-5">
          <About />
        </section>
        <section className="mb-5">
          <Projects />
        </section>
        <section className="mb-5">
          <Skills />
        </section>
        <section className="mb-5">
          <Education />
        </section>
        <section className="mb-5">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
