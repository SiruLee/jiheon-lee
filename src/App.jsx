import { useState } from "react";
import "./App.css";
import Navigation from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Education from "./components/edu.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

function App() {
  const [index, setIndex] = useState(0);
  const contents = [<Profile />, <Projects />, <Education />, <Contact />];
  return (
    <div className="App">
      <Navigation setIndex={setIndex} />
      {contents[index]}
      <Footer />
    </div>
  );
}

export default App;
