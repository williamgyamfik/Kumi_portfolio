import About from "./components/About";
import Contact from "./components/Contact";
import FrontView from "./components/FrontView";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <FrontView />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
