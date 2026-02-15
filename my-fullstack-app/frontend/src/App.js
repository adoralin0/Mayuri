import React, { useEffect, useState } from 'react';
import LandingPage from './MayuriHomepage'; // This looks for LandingPage.js in the same folder

function App() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    // Verifying backend connection to Flask
    fetch('http://localhost:5000/api/test')
      .then(res => res.json())
      .then(() => setStatus("online"))
      .catch(() => setStatus("offline"));
  }, []);

  return (
    <div className="App">
      <LandingPage />
      
      {/* Visual indicator of Flask Backend status */}
      <div className="fixed bottom-4 left-4 flex items-center space-x-2 bg-white/80 p-2 rounded-full shadow-md text-xs font-bold">
        <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span>Backend: {status.toUpperCase()}</span>
      </div>
    </div>
  );
}

export default App;