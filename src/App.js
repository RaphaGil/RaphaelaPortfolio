import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Home from "./components/Hero";  // Main Home Page
import About from './components/About';  // About Section
import Projects from "./components/Projects";  // Projects Preview
import AllProjects from "./pages/AllProjects";  // All Projects Page
import Footer from './components/Footer';  // Footer
import Contact from './components/Contact.jsx'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
     {/* Navigation bar should always be visible */}
      
      <Routes>
        {/* Main page (Home) includes About and Projects */}
        <Route 
          path="/" 
          element={
            <div>
              <Nav /> 
              <Home />  {/* Home Section */}
              <About id="about" />  {/* About Section */}
              <Projects id="projects" />  {/* Projects Preview Section */}
              <Contact id="contact" />
            </div>
          }
        />

        {/* Route for All Projects Page */}
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>

      <Footer />  {/* Footer should appear on all pages */}
    </Router>
  );
}

export default App;
