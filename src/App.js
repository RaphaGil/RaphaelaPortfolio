import { HashRouter as Router, Route, Routes } from "react-router-dom";


import Nav from './components/Nav';
import Home from "./components/Home";  // Main Home Page
import About from './pages/About';  // About Section
import Projects from "./components/Projects";  // Projects Preview
import AllProjects from "./pages/AllProjects";  // All Projects Page
import Footer from './components/Footer';  // Footer
import Contact from './components/Contact.jsx'


function App() {
  return (
    <Router>
     {/* Navigation bar should always be visible */}
      
      <Routes>
        {/* Main page (Home) includes About and Projects */}
        <Route 
          path="/" 
          element={
            <div>
              <Nav /> 
              <Home />  {/* Home Section */}
              <About />  {/* About Section */}
              <Projects />  {/* Projects Preview Section */}
              <Contact />
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
