import "./styles/style.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <About />
          <Resume />
          <Projects />
          <Blog />
          <Gallery />
        </div>
      </main>
    </div>
  );
}

export default App;