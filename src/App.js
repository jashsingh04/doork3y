import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import {
  Header,
  Hero,
  AboutUs,
  Investors,
  Entrepreneurs,
  News,
  FAQ,
  Contact,
  Footer,
} from "./components";  // Now importing from ./components folder

function App() {
  return (
    <Box sx={{ bgcolor: "#e7f1ff", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <AboutUs />
      <Investors />
      <Entrepreneurs />
      <News />
      <FAQ />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
