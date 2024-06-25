import { useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";

export const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const responsiveness = useMediaQuery({
    query: "(max-width: 550px)",
  });

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className={`menu ${mobileMenu ? "active" : ""}`}>
            <ul>
              <li>Product</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
            <a>Login</a>
          </div>
          {responsiveness && (
            <div className="menu_icon" onClick={handleMenu}>
              <i className={`fa-solid ${mobileMenu ? "fa-x" : "fa-bars"} `}></i>
            </div>
          )}
        </nav>
      </header>
      <main>
        <div className="main_text">
          <div className="main_text_subtitle">
            <span>New</span>
            <p>Monograph Dashboard</p>
          </div>
          <h1>Powerful insights into your team</h1>
          <div className="main_text_description">
            <p>Project planning and time tracking for agile teams</p>
          </div>
          <div className="main_text_actions">
            <button>Schedule a demo</button>
            <span>To see a preview</span>
          </div>
        </div>
        <div className="main_image">
          <img src="./illustration-devices.svg" alt="illustration" />
        </div>
      </main>
    </div>
  );
};
