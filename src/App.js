import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div>
      <Header 
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}/>
      <MainContent darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
