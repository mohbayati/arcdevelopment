import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Theme from "./ui/Theme";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/revolution" element={<div>The Revolution</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
          setValue={setValue}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
