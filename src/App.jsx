import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import Footer from "./Footer";
import CatDisplay from "./CatDisplay";
import "@fontsource/roboto/300.css";

// create App
const App = () => {
  return (
    <div>
      <Header />
      <CatDisplay />
      <Footer />
    </div>
  );
};

// get div with ID root, create container, render App
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
