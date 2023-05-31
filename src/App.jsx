import "../src/assets/styles/App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
