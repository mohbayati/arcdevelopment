import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import Theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/revolution" element={<div>The Revolution</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
