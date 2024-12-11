import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Profile_img from "../src/components/Hero/Hero";

// Ensure Navbar component is imported correctly
if (!Navbar) {
  console.error("Navbar component is not found");
}

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
