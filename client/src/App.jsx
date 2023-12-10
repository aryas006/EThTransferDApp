import { useState } from "react";
import "./index.css";
import "./App.css";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from "../src/components/index";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
