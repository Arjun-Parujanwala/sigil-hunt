import React, { useState, useEffect} from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import example_sigil from '../../assets/example_sigil.png'
function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Hide the logo after 3 seconds
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    {showLogo ? (
      <div className="logo-popup">
        <img src={example_sigil} alt="Logo" className="logo" />
      </div>
    ) : (
      <div className="welcome-screen">
        <h1>Welcome</h1>
      </div>
    )}
    </div>
  );
}

export default App;
