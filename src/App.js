import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from "./components/Projects";
import AllProjects from "./pages/AllProjects";
import Footer from './components/Footer';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      {/* Navigation bar should always be visible */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Nav />
              <Hero />
              <About id="about" />
              <Projects id="projects" />
              <Contact id="contact" />
              <Footer />
            </>
          } 
        />

        <Route 
          path="/allprojects" 
          element={
            <>
              <AllProjects />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
