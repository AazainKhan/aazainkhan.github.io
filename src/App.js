import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";

function App() {
  const [activePage, setActivePage] = useState("About"); // Initial active page

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div className="App">
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar activePage={activePage} onClick={handlePageChange} />
          {activePage === "About" && <About />}
          {activePage === "Resume" && <Resume />}
          {activePage === "Projects" && <Projects />}
          {activePage === "Blog" && <Blog />}
          {activePage === "Gallery" && <Gallery />}
        </div>
      </main>
    </div>
  );
}

export default App;
