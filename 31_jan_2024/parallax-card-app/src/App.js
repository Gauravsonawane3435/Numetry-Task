import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Parallax Cards</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#cards">Cards</a></li>
          <li><a href="#footer">Contact</a></li>
          <li>
            <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Parallax */}
      <header id="home" className="parallax">
        <h1>Welcome to the Parallax Card Showcase</h1>
        <p>Experience smooth scrolling, flipping cards, and more!</p>
        <a href="#cards" className="btn">Explore Cards</a>
      </header>

      {/* Content Section */}
      <section id="cards" className="content">
        <h1>Responsive Card Grid</h1>
        <div className="card-container">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h2>Card {num}</h2>
                </div>
                <div className="card-back">
                  <p>More details about Card {num}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Footer */}
      <footer id="footer">
        <p>Made with ❤️ by Gaurav</p>
        <div className="social-icons">
          <a href="#" target="_blank">🔗 LinkedIn</a>
          <a href="#" target="_blank">🐦 Twitter</a>
          <a href="#" target="_blank">📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
