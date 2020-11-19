import React from "react";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  document.title = "Employee Directory";
  return (
    
      <div>
        <Navbar />
        <Wrapper>
          <Search />
        </Wrapper>
        <Footer />
      </div>
    
  );
}

export default App;
