import React, { useEffect, useState } from "react";
import LoginRegister from "./loginregister";
import "./styles.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a timeout to hide the intro screen after 1 second
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(introTimeout); // Clean up the timeout if the component unmounts
  }, []);

  return (
    <div className="App">
      {/* Intro Screen */}
      {showIntro && (
        <div className="intro-screen">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <h4>SORTMYENTRIES</h4>
        </div>
      )}

      {/* Main Content (Login/Register component) */}
      {showContent && (
        <div className="content">
          <LoginRegister />
        </div>
      )}
    </div>
  );
}

export default App;
