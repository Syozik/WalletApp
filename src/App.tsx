import { useState, useEffect } from "react";
import "./styles/App.css";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionPage from "./TransactionPage"; // Assuming you have this page for detailed view

function App(): JSX.Element {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isMobile ? <MobileContent /> : <DesktopContent />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
